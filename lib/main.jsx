import React from 'react';
import BadMoviePoll from 'lib/components/BadMoviePoll.jsx!';
import debug from 'debug';

debug.enable('*MovieService*');

var log = debug('BadMoviePoll:main.jsx');

log('spinning up');
window.React = React;

React.render(<BadMoviePoll></BadMoviePoll>, document.getElementById('app'));
