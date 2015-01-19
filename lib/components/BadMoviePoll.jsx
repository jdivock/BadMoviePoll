'use strict';

import React from 'react';
import debugLib from 'debug';

import Auth from 'services/Auth';
import MovieService from 'services/MovieService';

import Movies from 'components/Movies/Movies';
import Login from 'components/Login/Login';
import Welcome from 'components/Login/Welcome';
import CurrentMovie from 'components/Movies/CurrentMovie';

let debug = debugLib('BadMoviePoll:BadMoviePoll.jsx');

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
		debug('movie store change handled');
		this.setState({
			movies: movies
		});
	},
	_onLoggedIn: function(profile, isLoggedIn){
		debug('user logged in');
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

		return (
			<article className='bad-movie-poll'>
				<Login
					auth={this.state.auth}
					>
				</Login>
				<CurrentMovie
					movies={this.state.movies}
					auth={this.state.auth}
					>
				</CurrentMovie>
				<Movies
					movies={this.state.movies}
					auth={this.state.auth}
					>
				</Movies>
			</article>
		);
	}

});

export default BadMoviePoll;
