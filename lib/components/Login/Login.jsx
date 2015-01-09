import React from 'react';

var Login = React.createClass({
	gLogin: function(){
		gapi.auth.signIn();
	},	
	render: function(){

		return (
			<button className="pure-button" onClick={this.gLogin}>Login</button>
		);
	}
});


export default  Login;