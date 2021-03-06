'use strict';

require('./AddMovie.less');

import React from 'react/addons';
import MovieService from 'services/MovieService';
import MovieSearchResults from 'components/Movies/AddMovie/MovieSearchResults';
import debug from 'debug';
import _ from 'lodash';

let log = debug('BadMoviePoll:AddMovie.jsx');

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

	var cx = React.addons.classSet;
	var classes = cx({
	    'add-movie-section': true,
	    'has-movies': this.state.searchResults && this.state.searchResults.length > 0
	});

	return(
	    <section className={classes} onSubmit={e => e.preventDefault()}>
		<h2>Add Movie</h2>
		<form className="pure-form search-form">
		    <fieldset>
			<label htmlFor="search">
			    <input ref="movieName" type="search" onChange={this.searchMovies}></input>
			    <i className="fa fa-close" onClick={this.clearResults}>
			    </i>
			</label>
		    </fieldset>
		    <MovieSearchResults auth={this.props.auth}
	                                results={this.state.searchResults}
	                                clearResults={this.clearResults} >
		    </MovieSearchResults>
		</form>
	    </section>
	);
    }
});

export default AddMovie;
