'use strict';

require('./main.less');
require('6to5/polyfill');

import React from 'react';
import BadMoviePoll from 'components/BadMoviePoll';
import debug from 'debug';

debug.enable('*');

debug('main.jsx')('spinning up');

window.React = React;

React.render(<BadMoviePoll></BadMoviePoll>, document.getElementById('app'));
