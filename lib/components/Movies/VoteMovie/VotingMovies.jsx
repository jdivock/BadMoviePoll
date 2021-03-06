'use strict';

require('./VotingMovies.less');

import React from 'react';
import MovieService from 'services/MovieService';
import MovieRow from 'components/Movies/MovieRow';
import debugLib from 'debug';

let debug = debugLib('BadMoviePoll:Vote.jsx');

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

		var movies = moviesArr
		.sort(this._sortVotingMovies)
		.map( movie => <MovieRow
			key={movie.movieKey}
			movie={movie}
			auth={this.props.auth}>
		</MovieRow> );

		return (
			<section className="voting-movies">
				<h2>Vote</h2>
				<table className="pure-table pure-table-striped voting-movies">
					<tbody>
						{movies}
					</tbody>
				</table>
			</section>
		);
	}
});


export default VotingMovies;
