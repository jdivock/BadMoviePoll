import React from 'react';
import MovieService from 'lib/MovieService';


// TODO: Show movies in unauth state
var VotingMovie = React.createClass({
	voteMovie: function(){
		MovieService.voteForMovie(this.props.movie.movieKey, this.props.auth.profile);
	},
	render: function(){
		return (
			<tr>
				<td className="movie-add">
					<i className="fa fa-plus" onClick={this.voteMovie}></i>
					{this.props.movie.votes.length}
				</td>
				<td><img src={this.props.movie.posters.thumbnail}/></td>
				<td>{this.props.movie.title} ({this.props.movie.year})</td>
				<td>{this.props.movie.ratings.critics_rating}</td>
			</tr>
		);
	}

});

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
				.map( movie => <VotingMovie
					key={movie.movieKey}
					movie={movie}
					auth={this.props.auth}>
				</VotingMovie>);

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
