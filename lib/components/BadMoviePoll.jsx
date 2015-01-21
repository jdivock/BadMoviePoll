'use strict';

import React from 'react';
import debugLib from 'debug';

import Auth from 'services/Auth';
import MovieService from 'services/MovieService';

import Login from 'components/Login/Login';
import Welcome from 'components/Login/Welcome';
import UpcomingMovies from 'components/Movies/UpcomingMovies';
import AddMovie from 'components/Movies/AddMovie/AddMovie';
import VotingMovies from 'components/Movies/VoteMovie/VotingMovies';

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
		var loginContent, addMovieContent;

		if( !this.state.auth.profile ){
			// unauth'd content
			loginContent = (
				<Login
					auth={this.state.auth}
					>
				</Login>);
		} else {  // auth'd content
			addMovieContent = (
				<AddMovie
					movies={this.state.movies}
					auth={this.state.auth}
				></AddMovie>
			);
		}

		return (
			<article className='bad-movie-poll'>
				{loginContent}		
				<UpcomingMovies
					movies={this.state.movies}
					auth={this.state.auth}
					>
				</UpcomingMovies>
				{addMovieContent}
				<VotingMovies
					votingMovies={this.state.movies.votingMovies}
					auth={this.state.auth}
				></VotingMovies>
			</article>
		);
	}

});

export default BadMoviePoll;
