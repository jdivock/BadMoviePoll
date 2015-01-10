import React from 'react';

var Welcome = React.createClass({
	render: function(){
		return <h5>Signed in as {this.props.auth.name}</h5>;
	}
});


export default  Welcome;
