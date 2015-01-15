import React from 'react/addons';
import MovieService from 'lib/MovieService';
import MovieRow from 'lib/components/Movies/MovieRow.jsx!';
import debug from 'debug';
import _ from 'lodash';

let log = debug('BadMoviePoll:AddMovie.jsx');


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
			<table className="pure-table pure-table-striped">
				<tbody>
					{movieResults}
				</tbody>
			</table>
		);
	}
});


var AddMovie = React.createClass({
	componentDidMount: function() {
		// Throttle calls to search service since I've bound them to keydown
		this.throttleSearch = _.throttle(
			this._search,
			100);
	},
	_search: function(){
		MovieService.search(this.refs.movieName.getDOMNode().value).then(resp => this.setState({searchResults: resp}), err => log(err));
	},
	getInitialState: function(){
		return {
			searchResults: null
		};
	},
	searchMovies: function(e){
		e.preventDefault();

		this.throttleSearch();
	},
	clearResults: function(){
		this.setState({
			searchResults: null
		});
		this.refs.movieName.getDOMNode().value = null;
	},
	render: function(){

		return(
			<section className='add-movie-section'>
				<h2>Add Movie</h2>
				<form className="pure-form search-form">
					<fieldset>
						<label htmlFor="search">
							<input ref="movieName" type="search" onChange={this.searchMovies}></input>
							<i
								className="fa fa-close"
								onClick={this.clearResults}>
							</i>
						</label>
					</fieldset>
					<MovieSearchResults
						auth={this.props.auth}
						results={this.state.searchResults}
						clearResults={this.clearResults}
					>
					</MovieSearchResults>
				</form>
			</section>
		);
	}
});

export default AddMovie;
