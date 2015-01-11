import React from 'react';
import MovieService from 'lib/MovieService';

var MovieResult = React.createClass({
	addMovie: function(){
		MovieService.addMovieToPoll(this.props.movie, this.props.auth.profile);
		this.props.clearResults();
	},
	render: function(){
		return(
			<tr>
				<td onClick={this.addMovie} className="movie-add">
					<i className="fa fa-plus"></i>
				</td>
				<td><img src={this.props.movie.posters.thumbnail}/></td>
				<td>{this.props.movie.title} ({this.props.movie.year})</td>
				<td>Rating: {this.props.movie.ratings.critics_rating}</td>
			</tr>
		);
	}
});

var MovieSearchResults = React.createClass({

	render: function(){

		if(!this.props.results){
			return (<div></div>);
		}

		var movieResults = this.props.results
			.filter(movie  => !!movie.release_dates.dvd)
			.map(movie =>
					<MovieResult
						auth={this.props.auth}
						key={movie.id}
						movie={movie}
						clearResults={this.props.clearResults}>
					</MovieResult>);

		return(
			<table className="pure-table movie-results">
				<tbody>
					{movieResults}
				</tbody>
			</table>
		);
	}
});


var AddMovie = React.createClass({
	getInitialState: function(){
		return {
			searchResults: []
		};
	},
	searchMovies: function(e){
		e.preventDefault();
		var self = this;
		MovieService.search(this.refs.movieName.getDOMNode().value).then(resp => self.setState({searchResults: resp.movies}));
	},
	clearResults: function(){
		this.setState({
			searchResults: []
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
