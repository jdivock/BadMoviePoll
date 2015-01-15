import jsonp from 'jsonp';
import _ from 'lodash';
import debug from 'debug';

let log = debug('BadMoviePoll:MovieService');

var searchPromiseSymbol = Symbol('searchPromise');

class MovieService {
    constructor() {
        log('movie service constructor');

        this.prom = null;
        this.reject = null;

        this.rottenTomatoesUrl = 'http://api.rottentomatoes.com/api/public/v1.0/';
        this.firebase = new Firebase('https://amber-inferno-2020.firebaseio.com');

        this.searchResults = [];
        this.votingMovies = [];

        this._votingMovieHandlers = [];

        this.firebase.child('votingMovies').on('value', this._setVotingMovies.bind(this));
    }

    // TODO: Color with current chosen movies to disable or filter them out
    // TODO: hangle pagination for parsing through results
    // TODO: Hide RT api key or just give no fucks
    search(query) {
        log('executing throttled search');
        var self = this;

        if (this.reject) {
        	log('rejecting pending promise');
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
            log('movies search returned');
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
        log('adding vote to movie');
        var votingMovie = this.votingMovies[key];

        if (!votingMovie.votes.find(profile => voterProfile.id === profile.id)) {
            this.firebase.child('votingMovies/' + key)
                .update({
                    votes: this._addProfileToVotes(votingMovie.votes, voterProfile)
                });
        } else {
            console.log('user already voted for movie');
        }
    }

    unvoteForMovie(key, voterProfile) {
        log('unvoting movie');
        var votingMovie = this.votingMovies[key];

        var remIdx = votingMovie.votes.findIndex(profile => profile.id === voterProfile.id);

        votingMovie.votes.splice(remIdx, remIdx + 1);

        if (votingMovie.votes.length === 0) {
            log('last vote removed, removing movie from poll');
            this.firebase.child('votingMovies/' + key).remove();
        } else {
            this.firebase.child('votingMovies/' + key).update({
                votes: votingMovie.votes
            });
        }
    }

    // TODO: remove lodash from find
    addMovieToPoll(movie, profile) {
        log('adding movie to poll with default vote');
        // redundant check to not add dupicate movie
        if (_(this.votingMovies).find(movie)) {
            return;
        }

        // Add movie to poll with yourself voting
        movie.votes = this._addProfileToVotes(movie.votes, profile);

        this.firebase.child('votingMovies').push(movie);
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

    // TODO: flatten out response from FB to array to ease sorting and comparing
    _setVotingMovies(snapshot) {
        this.votingMovies = snapshot.val();
        this._callMovieHandlers(this.votingMovies);
    }

    _callMovieHandlers(movies) {
        this._votingMovieHandlers.map(fn => fn(movies));
    }



}

export default new MovieService();
