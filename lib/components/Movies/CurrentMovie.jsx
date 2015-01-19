'use strict';

require('./CurrentMovie.less');

import _ from 'lodash';
import React from 'react';
import MovieService from 'services/MovieService';
import debugLib from 'debug';

let debug = debugLib('CurrentMovie.jsx');

var CurrentMovie = React.createClass({
	render: function(){
		if(!this.props.movies.currentMovies){
			return <span></span>;
		}

		var content = _.map(this.props.movies.currentMovies,
			movie =>
					<a key={movie.movieKey} href={movie.links.alternate} target="_blank">
						<img src={movie.posters.thumbnail}/>
						{movie.title} ({movie.year})
					</a>
			);


		return (
			<section>
				<h2>Upcoming:</h2>
				{content}
			</section>
		);
	}
});

export default CurrentMovie;
