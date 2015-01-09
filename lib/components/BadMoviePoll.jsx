import React from 'react';
import Movies from 'lib/Movies';
import AddMovie from 'lib/components/AddMovie/AddMovie.jsx!';
import Login from 'lib/components/Login/Login.jsx!';
import Vote from 'lib/components/Vote/Vote.jsx!';

var BadMoviePoll = React.createClass({
	
	render: function() {
		return (
			<div>
				<Login></Login>
				<AddMovie></AddMovie>
			</div>
		);
	}

});

export default BadMoviePoll;