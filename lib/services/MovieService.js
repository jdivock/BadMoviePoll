'use strict';

import Firebase from 'firebase';
import jsonp from 'jsonp';
import _ from 'lodash';
import debugLib from 'debug';

let debug = debugLib('BadMoviePoll:MovieService');

var searchPromiseSymbol = Symbol('searchPromise');

class MovieService {
    constructor() {
        debug('movie service constructor');

        this.prom = null;
        this.reject = null;

        this.rottenTomatoesUrl = 'http://api.rottentomatoes.com/api/public/v1.0/';
        this.firebase = new Firebase('https://amber-inferno-2020.firebaseio.com');

        this.searchResults = [];
        this.movies = {
        	votingMovies: {},
        	watchedMovies: {},
        	currentMovies: {}
        };

        this._votingMovieHandlers = [];

        this.firebase.child('movies').on('value', this._setMovies.bind(this));
        // this.firebase.child('watchedMovies').on('value', this._setWatchedMovies.bind(this));
        // this.firebase.child('currentMovie').on('value', this._setCurrentMovie.bind(this));
    }

    getMovies(){
    	debug('get movies called');
    	return this.movies;
    }

    // TODO: Color with current chosen movies to disable or filter them out
    // TODO: hangle pagination for parsing through results
    // TODO: Hide RT api key or just give no fucks
    search(query) {
        debug('executing throttled search');
        var self = this;

        if (this.reject) {
            debug('rejecting pending promise');
            this.reject(new Error('new query dispatched'));
        }

        return new Promise(function(resolve, reject) {

            self.reject = reject;

            return jsonp(
                self.rottenTomatoesUrl + 'movies.json?q=' + query + '&page_limit=10&page=1&apikey=qd9psweg5mupm8wqdct622bk', (err, data) => {
                    err ? reject(err) : resolve(data)
                }
            );
        }).then(function(resp) {
            debug('movies search returned');
            // TODO: can I do this without lodash?
            // TODO: clean up find logic, can make it less verbose
            return _(resp.movies)
                .filter(movie => !!movie.release_dates.dvd)
                .map(function(movie) {
                    var movieInPoll = _(self.votingMovies).find(movie);

                    if (movieInPoll) {
                        movie.key = self._extractMovieKey(self.votingMovies, movie);
                        movie.votes = movieInPoll.votes;
                    }

                    return movie;
                })
                .value();
        });

    }

    voteForMovie(key, voterProfile) {
        debug('adding vote to movie');
        var votingMovie = this.movies.votingMovies[key];

        if (!votingMovie.votes.find(profile => voterProfile.id === profile.id)) {
            this.firebase.child('movies/votingMovies/' + key)
                .update({
                    votes: this._addProfileToVotes(votingMovie.votes, voterProfile)
                });
        } else {
            debug('user already voted for movie');
        }
    }

    unvoteForMovie(key, voterProfile) {
        debug('unvoting movie');
        var votingMovie = this.movies.votingMovies[key];

        var remIdx = votingMovie.votes.findIndex(profile => profile.id === voterProfile.id);

        votingMovie.votes.splice(remIdx, remIdx + 1);

        if (votingMovie.votes.length === 0) {
            debug('last vote removed, removing movie from poll');
            this.firebase.child('movies/votingMovies/' + key).remove();
        } else {
            this.firebase.child('movies/votingMovies/' + key).update({
                votes: votingMovie.votes
            });
        }
    }

    setActiveMovie(movie, profile){
    	// Pull out movie from voting array and push into active movie list

    	let activeMovie = this.movies.votingMovies[movie.movieKey];

    	delete this.movies.votingMovies[movie.movieKey];

    	// this.movies.currentMovies[activeMovie.movieKey] = activeMovie;

    	this.firebase.child('movies/votingMovies/' + activeMovie.movieKey).remove();
    	this.firebase.child('movies/currentMovies/' + activeMovie.movieKey).set(activeMovie);
    }

    // TODO: remove lodash from find
    addMovieToPoll(movie, profile) {
        debug('adding movie to poll with default vote');
        // redundant check to not add dupicate movie
        if (_(this.movies.votingMovies).find(movie)) {
            return;
        }

        // Add movie to poll with yourself voting
        movie.votes = this._addProfileToVotes(movie.votes, profile);

        this.firebase.child('movies/votingMovies').push(movie);
    }

    registerMovieHandler(fn) {
        this._votingMovieHandlers.push(fn);
    }

    unregisterMovieHandler(remFn) {
        this._votingMovieHandlers = this._votingMovieHandlers.filter(fn => fn !== remFn);
    }

    // TODO: not hapy about this, find a better way to get the key, Object.lkeys maybe?
    _extractMovieKey(votingMovies, movie) {
        for (var vMovieKey in votingMovies) {
            if (votingMovies[vMovieKey].id === movie.id) {
                return vMovieKey;
            }
        }
    }

    _addProfileToVotes(votes, profile) {
        if (!votes) {
            votes = [];
        }

        votes.push({
            id: profile.id,
            image: profile.image,
            name: profile.displayName
        });

        return votes;
    }


    _setMovies(snapshot){
    	debug('set movies called', snapshot.val());
    	this.movies = snapshot.val() || {movies: {votingMovies: []}};
    	this._callMovieHandlers(this.movies);
    }

    _callMovieHandlers() {
    	debug('call movie handlers', this.movies);
        this._votingMovieHandlers.map(fn => fn(this.movies));
    }

}

export default new MovieService();
