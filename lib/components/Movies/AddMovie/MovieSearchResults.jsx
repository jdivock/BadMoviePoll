'use strict';

require('./MovieSearchResults.less');

import React from 'react/addons';
import MovieRow from 'components/Movies/MovieRow';
import debug from 'debug';

let log = debug('BadMoviePoll:MovieSearchResults.jsx');


var MovieSearchResults = React.createClass({

	render: function(){
		if(!this.props.results){
			return (<div></div>);
		}

		if(!this.props.results.length){
			return (<div>No Results Found.</div>);
		}

		var movieResults = this.props.results
			.slice(0,4)
			.map(movie =>
					<MovieRow
						auth={this.props.auth}
						key={movie.id}
						movie={movie}
						clearResults={this.props.clearResults}>
					</MovieRow>);

		return(
			<table className="movie-search-results pure-table pure-table-striped">
				<tbody>
					{movieResults}
				</tbody>
			</table>
		);
	}
});

export default MovieSearchResults;
