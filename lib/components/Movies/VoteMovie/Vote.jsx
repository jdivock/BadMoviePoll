import React from 'react';
import MovieService from 'lib/MovieService';


// TODO: Show movies in unauth state
var VotingMovie = React.createClass({
	voteMovie: function(){
		MovieService.voteForMovie(this.props.movieKey, this.props.auth.profile);
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

// TODO: sort movies by votes
var VotingMovies = React.createClass({
	render: function(){

		var movies = [];

		for(var movieKey in this.props.votingMovies){
			var movie = this.props.votingMovies[movieKey];

			movies.push(
				<VotingMovie
					key={movieKey}
					movieKey={movieKey}
					movie={movie}
					auth={this.props.auth}>
				</VotingMovie>);
		}

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
