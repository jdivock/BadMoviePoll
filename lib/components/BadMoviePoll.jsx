import React from 'react';
import Movies from 'lib/Movies';
import Auth from 'lib/Auth';
import AddMovie from 'lib/components/AddMovie/AddMovie.jsx!';
import Login from 'lib/components/Login/Login.jsx!';
import Welcome from 'lib/components/Login/Welcome.jsx!';
import Vote from 'lib/components/Vote/Vote.jsx!';

var BadMoviePoll = React.createClass({
	componentDidMount: function() {
		Auth.registerLoginHandler(this._onLoggedIn);
	},
	componentWillUnmount: function() {
		Auth.unregisterLoginHandler(this._onLoggedIn);
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
				<div>
				<Welcome auth={this.state.auth}></Welcome>
				<AddMovie auth={this.state.auth}></AddMovie>
				</div>
			);
		} else {
			content = <Login></Login>;
		}

		return content;
	}

});

export default BadMoviePoll;
