'use strict';

require('./UpcomingMovies.less');

import _ from 'lodash';
import React from 'react';
import MovieService from 'services/MovieService';
import UpcomingMovieDate from 'components/Movies/UpcomingMovieDate';
import debugLib from 'debug';

let debug = debugLib('UpcomingMovies.jsx');

var UpcomingMovies = React.createClass({
	render: function(){
		if(!this.props.movies.currentMovies){
			return <span></span>;
		}

		var content = _.map(
			this.props.movies.currentMovies,
			movie =>
			<tr key={movie.movieKey}>	
				<td>
					<a href={movie.links.alternate} target="_blank">
						<img src={movie.posters.thumbnail}/>

						{movie.title} ({movie.year})
					</a>
					<b>@</b>
					<UpcomingMovieDate
						auth={this.props.auth}
						movie={movie}>
					</UpcomingMovieDate>
				</td>
				<td>
				</td>
			</tr>	
		);


		return (
			<section className="upcoming-movies">
				<h2>Upcoming:</h2>
				<table>
					<tbody>
						{content}
					</tbody>
				</table>
			</section>
		);
	}
});

export default UpcomingMovies;
