'use strict';

require('./VoteMovieControls.less');

import React from 'react';
import MovieService from 'services/MovieService';
import debugLib from 'debug';

let debug = debugLib('BadMoviePoll:VoteMovieCell.jsx');

var ActiveMovieButton = React.createClass({
	_setActiveMovie: function(){
		MovieService.setActiveMovie(this.props.movie, this.props.auth.profile);
	},
	render: function(){
		var content = (
			<button
				className="pure-button set-active-button"
				type="button"
				onClick={this._setActiveMovie}
				>
				Set Active
			</button>
		);

		return this.props.auth.profile && this.props.auth.profile.isAdmin ? content : <span></span>;
	}
});

// TODO: break otu vote button into it's on self-contaiend button
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
		debug('adding movie and clearing results');
		e.preventDefault();
		MovieService.addMovieToPoll(this.props.movie, this.props.auth.profile);
		this.props.clearResults();
	},
	_didVote: function(auth, votes){
		debug('checking if voted', votes);
		return !!auth.profile && votes.find(vote => auth.profile.id === vote.id);
	},
	render: function(){
		var content;
		var voteClass;
		var voteFn;

		// If movie has votes show vote/unvote, else show add button
		if(this.props.movie.votes && this.props.movie.votes.length){

			if(this._didVote(this.props.auth, this.props.movie.votes)){
				voteClass = "fa fa-minus";
				voteFn = this.unvoteMovie;
			} else {
				voteClass = "fa fa-plus";
				voteFn = this.voteMovie;
			}

			content = (
				<button
					className="pure-button vote-button"
					type="button"
					onClick={voteFn}>
					<i className={voteClass}></i>
					<span>{this.props.movie.votes.length}</span>
				</button>
			);
		} else {
			content = (
				<button
					onClick={this.addMovie}
					type="button"
					className="pure-button pure-button-primary">
					Add movie to poll
				</button>
			);
		}

		return (
			<div className="vote-movie-controls">
				<ActiveMovieButton
					auth={this.props.auth}
					movie={this.props.movie}
					>
				</ActiveMovieButton>
				{content}
			</div>
		);
	}

});

export default VoteCell;
