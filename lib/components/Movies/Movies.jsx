'use strict';

import React from 'react';

import AddMovie from './AddMovie/AddMovie';
import VotingMovies from './VoteMovie/Vote';

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
