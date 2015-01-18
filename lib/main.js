'use strict';

var React = require('react'),
	debug = require('debug'),
	BadMoviePoll = require('./components/BadMoviePoll.jsx');

debug.enable('*');

debug('main.jsx')('spinning up');

window.React = React;

React.render(BadMoviePoll, document.getElementById('app'));
