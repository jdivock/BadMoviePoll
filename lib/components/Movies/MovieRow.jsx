'use strict';

require('./MovieRow.less');

import React from 'react/addons';
import VoteMovieControls from 'components/Movies/VoteMovie/VoteMovieControls';
import debug from 'debug';

let log = debug('BadMoviePoll:MovieRow.jsx');

var MovieRow = React.createClass({

	// jshint camelcase: false
	render: function(){
		var cx = React.addons.classSet;
		var classes = cx({
			'admin': this.props.auth.profile && this.props.auth.profile.isAdmin
		});

		return(
			<tr className="movie-row">
				<td className={classes}>
					<VoteMovieControls auth={this.props.auth}
						               movie={this.props.movie}
						               clearResults={this.props.clearResults}>
					</VoteMovieControls>
				</td>
				<td>
					<a href={this.props.movie.links.alternate} target="_blank">
						<img src={this.props.movie.posters.thumbnail}/>
						{this.props.movie.title} ({this.props.movie.year})
					</a>
				</td>
				<td>
					{this.props.movie.ratings.critics_rating}
				</td>
			</tr>
		);
	}
	// jshint camelcase: true
});

export default MovieRow;
