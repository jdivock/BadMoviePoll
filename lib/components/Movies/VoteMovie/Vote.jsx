import React from 'react';
import MovieService from 'lib/MovieService';
import MovieRow from 'lib/components/Movies/MovieRow.jsx!';

var VotingMovies = React.createClass({
	_sortVotingMovies(movieA, movieB){
		if( movieA.votes.length > movieB.votes.length){
			return -1;
		} else if( movieA.votes.length < movieB.votes.length){
			return 1;
		} else {
			return this._sortMoviesByName(movieA, movieB);
		}

	},
	_sortMoviesByName: function(movieA, movieB){
		if(movieA.title > movieB.title){
			return 1;
		} else {
			return -1;
		}
	},
	render: function(){

		var moviesArr = [];

		for(var movieKey in this.props.votingMovies){
			let movieTmp = this.props.votingMovies[movieKey];
			movieTmp.movieKey = movieKey;
			moviesArr.push(movieTmp);
		}

		var movies =
			moviesArr
				.sort(this._sortVotingMovies)
				.map( movie => <MovieRow
					key={movie.movieKey}
					movie={movie}
					auth={this.props.auth}>
				</MovieRow>);

		return (
			<table className="pure-table pure-table-striped voting-movies">
				<tbody>
				{movies}
				</tbody>
			</table>
		);
	}
});


export default VotingMovies;
