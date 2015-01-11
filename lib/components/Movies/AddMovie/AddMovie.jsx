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
					<i className="fa fa-plus" onClick={this.voteMovie}></i>
					{this.props.movie.votes.length}
				</td>
			);
		} else {
			return (
				<td onClick={this.addMovie} className="movie-add movie-not-added">
					Add movie to poll
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

		// TODO: filter out movie already in voting poll
		var movieResults = this.props.results
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
