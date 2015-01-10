import React from 'react';

import AddMovie from 'lib/components/Movies/AddMovie/AddMovie.jsx!';
import VotingMovies from 'lib/components/Movies/VoteMovie/Vote.jsx!';

var Movies = React.createClass({
	render: function(){
		return (
			<section>
				<AddMovie></AddMovie>
				<VotingMovies></VotingMovies>
			</section>
		);
	}
});


export default Movies;
