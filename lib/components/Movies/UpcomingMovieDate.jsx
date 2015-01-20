'use strict';

require('./UpcomingMovieDate.less');

import React from 'react';
import MovieService from 'services/MovieService';
import debugLib from 'debug';

let debug = debugLib('UpcomingMovieDate.jsx');

var UpcomingMovieDate = React.createClass({
	getInitialState: function(){
		return {
			editMode: false,
			movieDate: this.props.movie.showDate 
		};
	},
	setEditMode: function(){
		this.setState({
			editMode: true
		});
	},
	setMovieDate: function(){
		this.setState({
			movieDate: this.refs.movieDate.getDOMNode().value
		});	    
	},
	submitMovieDate: function(){
		MovieService.setMovieDate(this.props.movie.movieKey, this.state.movieDate, this.props.auth.profile);
		this.setState({
			editMode: false
		});
	},		
	render: function(){
		var content;
		var dateEditBtn;

		if(this.state.editMode){
			content = 
				<div className="upcoming-movie-date">
					<input ref="movieDate" type="date" value={this.state.movieDate} onChange={this.setMovieDate}/>
					<button className="pure-button" onClick={this.submitMovieDate}>
						Submit
					</button>
				</div>;
		} else {
			var editBtn;
			if(this.props.auth.profile && this.props.auth.profile.isAdmin){
				editBtn = 
					<button className="pure-button" onClick={this.setEditMode}>
						Edit
					</button>;
			}

			// TODO: add time as well (or not, we never start on time)
			content = 
				<div className="upcoming-movie-date">
					<span>{this.props.movie.showDate}</span>
					{editBtn}
				</div>;
		}

		return content;

	}

});

export default UpcomingMovieDate;
