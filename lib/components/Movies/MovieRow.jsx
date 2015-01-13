import React from 'react';
import VoteCell from 'lib/components/Movies/VoteMovie/VoteMovieCell.jsx!';

var MovieRow = React.createClass({

	render: function(){
		return(
			<tr>
				<VoteCell
					auth={this.props.auth}
					movie={this.props.movie}
					clearResults={this.props.clearResults}>
				</VoteCell>
				<td><img src={this.props.movie.posters.thumbnail}/></td>
				<td>{this.props.movie.title} ({this.props.movie.year})</td>
				<td>{this.props.movie.ratings.critics_rating}</td>
			</tr>
		);
	}
});

export default MovieRow;
