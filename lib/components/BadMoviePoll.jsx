'use strict';

import React from 'react';
import debug from 'debug';

import Auth from 'services/Auth';
import MovieService from 'services/MovieService';

import Movies from 'components/Movies/Movies';
import Login from 'components/Login/Login';
import Welcome from 'components/Login/Welcome';

let log = debug('BadMoviePoll:BadMoviePoll.jsx');

var BadMoviePoll = React.createClass({
	componentDidMount: function() {
		MovieService.registerMovieHandler(this._onMovieChange);
		Auth.registerLoginHandler(this._onLoggedIn);
	},
	componentWillUnmount: function() {
		MovieService.unregisterMovieHandler(this._onMovieChange);
		Auth.unregisterLoginHandler(this._onLoggedIn);
	},
	_onMovieChange: function(movies){
		log('movie store change handled');
		this.setState({
			movies: movies
		});
	},
	_onLoggedIn: function(profile, isLoggedIn){
		log('user logged in');
		this.setState({
			auth: {
				profile: Auth.profile,
				isLoggedIn: Auth.isLoggedIn
			}
		});
	},
	getInitialState: function(){
		return {
			movies: MovieService.getMovies(),
			auth: {
				profile: Auth.profile,
				isLoggedIn: Auth.isLoggedIn
			}
		};
	},
	render: function() {
		var content = '';

		if(this.state.auth.isLoggedIn){
			content = (
				<Movies
					movies={this.state.movies}
					auth={this.state.auth}
				>
				</Movies>
			);
		} else {
			content = <Login></Login>;
		}

		return content;
	}

});

export default BadMoviePoll;
