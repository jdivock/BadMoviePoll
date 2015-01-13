import React from 'react';
import MovieService from 'lib/MovieService';

var VoteCell = React.createClass({
	voteMovie: function(){
		MovieService.voteForMovie(this.props.movie.movieKey, this.props.auth.profile);
	},
	addMovie: function(){
		MovieService.addMovieToPoll(this.props.movie, this.props.auth.profile);
		this.props.clearResults();
	},
	render: function(){
		var content;

		if(this.props.movie.votes && this.props.movie.votes.length){
			content = (
				<button className="pure-button" onClick={this.voteMovie}>
					<i className="fa fa-plus"></i>
					<span>{this.props.movie.votes.length}</span>
				</button>
			);
		} else {
			content = (
				<button onClick={this.addMovie} className="pure-button pure-button-primary">
					Add movie to poll
				</button>
			);
		}

		return (
			<td className="movie-add">
				{content}
			</td>
		);
	}

});

export default VoteCell;
