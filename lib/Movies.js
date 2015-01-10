import jsonp from 'jsonp';

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
		return new Promise((resolve, reject) => {
			jsonp(
				this.rottenTomatoesUrl + 'movies.json?q=' + query + '&page_limit=10&page=1&apikey=qd9psweg5mupm8wqdct622bk', (err, data) => {
					err ? reject(err) : resolve(data)
				}
			);
		});
	}

	voteMovie(key, movie, voterProfile){
		if( !movie.votes.filter(profile => voterProfile.id !== profile.id) ){
			movie = this._addProfileToVotes(movie, voterProfile);
 			this.firebase.child('votingMovies/' + key).update({votes: movie.votes});
		}
	}

	addMovieToPoll(movie, profile){
		movie = this._addProfileToVotes(movie, profile);

		this.firebase.child('votingMovies').push(movie);
	}

	_addProfileToVotes(movie, profile){
		if(!movie.votes){
			movie.votes = [];
		}

		movie.votes.push({
			id: profile.id,
			image: profile.image,
			name: profile.displayName
		});

		return movie;
	}

	_setVotingMovies(snapshot){
		this.votingMovies = snapshot.val();
		this._callMovieHandlers(this.votingMovies);
	}

	_callMovieHandlers(movies){
		this._votingMovieHandlers.map( fn => fn(movies) );
	}

	registerMovieHandler(fn){
		this._votingMovieHandlers.push(fn);
	}

	unregisterMovieHandler(remFn){
		this._votingMovieHandlers = this._votingMovieHandlers.filter( fn => fn !== remFn);
	}

}

export default new MovieService();
