'use strict';

import React from 'react';
import VoteCell from 'components/Movies/VoteMovie/VoteMovieCell';
import debug from 'debug';

let log = debug('BadMoviePoll:MovieRow.jsx');

var MovieRow = React.createClass({

	render: function(){
		return(
			<tr>
				<VoteCell
					auth={this.props.auth}
					movie={this.props.movie}
					clearResults={this.props.clearResults}>
				</VoteCell>
				<td>
					<a href={this.props.movie.links.alternate} target="_blank">
						<img src={this.props.movie.posters.thumbnail}/>
						{this.props.movie.title} ({this.props.movie.year})
					</a>
				</td>
				<td>{this.props.movie.ratings.critics_rating}</td>
			</tr>
		);
	}
});

export default MovieRow;
