'use strict';

require('./ActiveMovieButton.less');

import React from 'react';
import MovieService from 'services/MovieService';
import debugLib from 'debug';

let debug = debugLib('BadMoviePoll:ActiveMovieButton.jsx');

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

export default ActiveMovieButton;
