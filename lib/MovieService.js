import jsonp from 'jsonp';
import _ from 'lodash';

class MovieService {
	constructor() {
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
		var self = this;

		return new Promise((resolve, reject) => {
			jsonp(
				this.rottenTomatoesUrl + 'movies.json?q=' + query + '&page_limit=10&page=1&apikey=qd9psweg5mupm8wqdct622bk', (err, data) => {
					err ? reject(err) : resolve(data)
				}
			);
		}).then(function(resp){

			// TODO: can I do this without lodash?
			// TODO: clean up find logic, can make it less verbose
			return  _(resp.movies)
					.filter(movie  => !!movie.release_dates.dvd)
					.map(function(movie){

						var movieInPoll = _(self.votingMovies).find(movie);

						console.log(movieInPoll);
						if(movieInPoll){
							movie.votes = movieInPoll.votes;
							movie.inPoll = true;
						} else {
							movie.inPoll = false;
						}

						return movie;
					})
					.value();
		});
	}

	voteForMovie(key, voterProfile){
		var votingMovie = this.votingMovies[key];

		if( !votingMovie.votes.find(profile => voterProfile.id === profile.id)){
 			this.firebase.child('votingMovies/' + key)
 				.update(
 					{
 						votes: this._addProfileToVotes(votingMovie.votes, voterProfile)
 					}
 				);
		} else {
			console.log('user already voted for movie');
		}
	}

	addMovieToPoll(movie, profile){

		// redundant check to not add dupicate movie
		if(_(this.votingMovies).find(movie)){
			return;
		}

		// Add movie to poll with yourself voting
		movie.votes = this._addProfileToVotes(movie.votes, profile);

		this.firebase.child('votingMovies').push(movie);
	}

	registerMovieHandler(fn){
		this._votingMovieHandlers.push(fn);
	}

	unregisterMovieHandler(remFn){
		this._votingMovieHandlers = this._votingMovieHandlers.filter( fn => fn !== remFn);
	}

	_addProfileToVotes(votes, profile){
		if(!votes){
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
	_setVotingMovies(snapshot){
		this.votingMovies = snapshot.val();
		this._callMovieHandlers(this.votingMovies);
	}

	_callMovieHandlers(movies){
		this._votingMovieHandlers.map( fn => fn(movies) );
	}



}

export default new MovieService();