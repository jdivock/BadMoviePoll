import React from 'react';
import Auth from 'lib/Auth';
import MovieService from 'lib/Movies';
import Movies from 'lib/components/Movies/Movies.jsx!';
import Login from 'lib/components/Login/Login.jsx!';
import Welcome from 'lib/components/Login/Welcome.jsx!';

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
		this.setState({
			votingMovies: movies
		});
	},
	_onLoggedIn: function(name, isLoggedIn){
		this.setState({
			auth: {
				name: Auth.name,
				isLoggedIn: Auth.isLoggedIn
			}
		});
	},
	getInitialState: function(){
		return {
			auth: {
				name: Auth.name,
				isLoggedIn: Auth.isLoggedIn
			}
		};
	},
	render: function() {
		var content = '';

		if(this.state.auth.isLoggedIn){
			content = (
				<Movies></Movies>
			);
		} else {
			content = <Login></Login>;
		}

		return content;
	}

});

export default BadMoviePoll;
