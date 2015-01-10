import React from 'react';
import MovieService from 'lib/Movies';

var VotingMovie = React.createClass({
	voteMovie: function(){
		MovieService.voteMovie(this.props.movieKey, this.props.movie);
	},
	render: function(){
		return (
			<tr>
				<td>
					<i className="fa fa-plus" onClick={this.voteMovie}></i>
					{this.props.movie.votes}
				</td>
				<td><img src={this.props.movie.posters.thumbnail}/></td>
				<td>{this.props.movie.title} ({this.props.movie.year})</td>
				<td>Rating: {this.props.movie.ratings.critics_rating}</td>
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

			movies.push(<VotingMovie key={movieKey} movieKey={movieKey} movie={movie}></VotingMovie>);
		}

		return (
			<table className="pure-table">
				<thead>
					<tr>
						<td>Votes</td>
						<td colSpan="2">Movie</td>
						<td>Rating</td>
					</tr>
				</thead>
				<tbody>
				{movies}
				</tbody>
			</table>
		);
	}
});


export default VotingMovies;
