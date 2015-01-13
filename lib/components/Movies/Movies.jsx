import React from 'react';

import AddMovie from 'lib/components/Movies/AddMovie/AddMovie.jsx!';
import VotingMovies from 'lib/components/Movies/VoteMovie/Vote.jsx!';

var Movies = React.createClass({
	render: function(){
		return (
			<article>
				<AddMovie
					votingMovies={this.props.votingMovies}
					auth={this.props.auth}
				></AddMovie>
				<VotingMovies
					votingMovies={this.props.votingMovies}
					auth={this.props.auth}
				></VotingMovies>
			</article>
		);
	}
});

export default Movies;
