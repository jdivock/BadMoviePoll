import React from 'react';
import MovieService from 'lib/Movies';

var MovieResult = React.createClass({
	addMovie: function(){
		MovieService.addMovieToPoll(this.props.movie);
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
			.map(movie => <MovieResult key={movie.id} movie={movie}></MovieResult>);

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
	render: function(){
		return(
			<div>
				<form className="pure-form">
					<fieldset>
						<input ref="movieName" type="text"></input>
						<button className="pure-button pure-button-primary" type="submit" onClick={this.searchMovies}>Search</button>
					</fieldset>
					<MovieSearchResults results={this.state.searchResults}></MovieSearchResults>
				</form>
			</div>
		);
	}
});

export default AddMovie;
