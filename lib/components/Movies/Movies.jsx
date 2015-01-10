import React from 'react';

import AddMovie from 'lib/components/Movies/AddMovie/AddMovie.jsx!';
import VotingMovies from 'lib/components/Movies/VoteMovie/Vote.jsx!';

var Movies = React.createClass({
	render: function(){
		return (
			<section>
				<AddMovie votingMovies={this.props.votingMovies}></AddMovie>
				<VotingMovies votingMovies={this.props.votingMovies}></VotingMovies>
			</section>
		);
	}
});


export default Movies;
