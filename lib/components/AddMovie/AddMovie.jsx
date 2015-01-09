import React from 'react';
import Movies from 'lib/Movies';

var MovieResult = React.createClass({
	render: function(){
		return(
			<tr>
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
			.map(movie => <MovieResult movie={movie}></MovieResult>);

		return(
			<table>
			{movieResults}
			</table>
		);
	}
});


var AddMovie = React.createClass({
	getInitialState: function(){
		var self = this;
		Movies.search('ghost').then( resp => self.setState({searchResults: resp.movies}) );

		return {
			// searchResults: []
		};
	},
	searchMovies: function(){
		Movies.search(this.refs.movieName.getDOMNode().value).then(resp => self.setState({searchResults: resp.movies}));
	},
	render: function(){
		return(
			<div>
				<input ref="movieName" type="text"></input>
				<button type="submit" onClick={this.searchMovies}>Search</button>
				<MovieSearchResults results={this.state.searchResults}></MovieSearchResults>
			</div>
		);
	}
});

export default AddMovie;