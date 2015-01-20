'use strict';

import React from 'react';

import AddMovie from 'components/Movies/AddMovie/AddMovie';
import VotingMovies from 'components/Movies/VoteMovie/VotingMovies';

var Movies = React.createClass({
	render: function(){
		return (
			<article>
				<AddMovie
					movies={this.props.movies}
					auth={this.props.auth}
				></AddMovie>
				<VotingMovies
					votingMovies={this.props.movies.votingMovies}
					auth={this.props.auth}
				></VotingMovies>
			</article>
		);
	}
});

export default Movies;
