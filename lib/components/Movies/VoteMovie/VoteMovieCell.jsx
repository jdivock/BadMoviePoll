import React from 'react';
import MovieService from 'lib/MovieService';
import debug from 'debug';

let log = debug('BadMoviePoll:VoteMovieCell.jsx');


var VoteCell = React.createClass({
	voteMovie: function(e){
		e.preventDefault();
		MovieService.voteForMovie(this.props.movie.movieKey, this.props.auth.profile);
	},
	unvoteMovie: function(e){
		e.preventDefault();
		MovieService.unvoteForMovie(this.props.movie.movieKey, this.props.auth.profile);
	},
	addMovie: function(e){
		log('adding movie and clearing results');
		e.preventDefault();
		MovieService.addMovieToPoll(this.props.movie, this.props.auth.profile);
		this.props.clearResults();
	},
	_didVote: function(auth, votes){
		log('checking if voted');
		return votes.find(vote => auth.profile.id === vote.id);
	},
	render: function(){
		var content;
		var voteClass;
		var voteFn;

		if(this.props.movie.votes && this.props.movie.votes.length){

			if(this._didVote(this.props.auth, this.props.movie.votes)){
				voteClass = "fa fa-minus";
				voteFn = this.unvoteMovie;
			} else {
				voteClass = "fa fa-plus";
				voteFn = this.voteMovie;
			}

			content = (
				<button className="pure-button vote-button" type="button" onClick={voteFn}>
					<i className={voteClass}></i>
					<span>{this.props.movie.votes.length}</span>
				</button>
			);
		} else {
			content = (
				<button onClick={this.addMovie} type="button" className="pure-button pure-button-primary">
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
