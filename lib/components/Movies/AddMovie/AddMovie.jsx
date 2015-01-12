import React from 'react';
import MovieService from 'lib/MovieService';

var MovieResult = React.createClass({
	addMovie: function(){
		MovieService.addMovieToPoll(this.props.movie, this.props.auth.profile);
		this.props.clearResults();
	},
	voteMovie: function(){

		console.log(this.props.movie);
		MovieService.voteForMovie(this.props.movie.key, this.props.auth.profile);
	},
	_buildAddCell: function(){
		if(this.props.movie.votes){
			return(
				<td className="movie-add">
					<button className="pure-button" onClick={this.voteMovie}>
						Vote:
						{this.props.movie.votes.length}
					</button>
				</td>
			);
		} else {
			return (
				<td onClick={this.addMovie} className="movie-add movie-not-added">
					<button className="pure-button pure-button-primary">Add movie to poll</button>
				</td>
			);
		}
	},
	render: function(){

		return(
			<tr>
				{this._buildAddCell()}
				<td><img src={this.props.movie.posters.thumbnail}/></td>
				<td>{this.props.movie.title} ({this.props.movie.year})</td>
				<td>{this.props.movie.ratings.critics_rating}</td>
			</tr>
		);
	}
});

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
					<MovieResult
						auth={this.props.auth}
						key={movie.id}
						movie={movie}
						clearResults={this.props.clearResults}>
					</MovieResult>);

		return(
			<div className="table-wrap movie-search-results">
				<table className="pure-table pure-table-striped">
					<tbody>
						{movieResults}
					</tbody>
				</table>
			</div>
		);
	}
});


var AddMovie = React.createClass({
	getInitialState: function(){
		return {
			searchResults: null
		};
	},
	searchMovies: function(e){
		e.preventDefault();
		var self = this;
		MovieService.search(this.refs.movieName.getDOMNode().value).then(resp => self.setState({searchResults: resp}));
	},
	clearResults: function(){
		this.setState({
			searchResults: null
		});
		this.refs.movieName.getDOMNode().value = null;
	},
	render: function(){
		return(
			<div>
				<form className="pure-form">
					<fieldset>
						<input ref="movieName" type="text"></input>
						<button className="pure-button pure-button-primary" type="submit" onClick={this.searchMovies}>Search</button>
					</fieldset>
					<MovieSearchResults
						auth={this.props.auth}
						results={this.state.searchResults}
						clearResults={this.clearResults}
					>
					</MovieSearchResults>
				</form>
			</div>
		);
	}
});

export default AddMovie;
