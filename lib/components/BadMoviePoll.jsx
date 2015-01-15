import React from 'react';
import Auth from 'lib/Auth';
import MovieService from 'lib/MovieService';
import Movies from 'lib/components/Movies/Movies.jsx!';
import Login from 'lib/components/Login/Login.jsx!';
import Welcome from 'lib/components/Login/Welcome.jsx!';
import debug from 'debug';

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
