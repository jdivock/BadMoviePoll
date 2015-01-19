# Bad Movie Poll [![Build Status](https://travis-ci.org/jdivock/BadMoviePoll.svg?branch=master)](https://travis-ci.org/jdivock/BadMoviePoll)

Basic Movie Polling site for Bad Movie Night™ @ Huge

### Version
0.0.1

### Tech

* [Firebase] - wooo, live db
* [React] - sup
* [jspm] - github + npm and stuff
* [systemjs] - trying this out, es6 module loading


### Installation

You need webpack installed globally:

```sh
$ npm i -g webpack
```

```sh
$ npm i
```

Then run it however you feels ([live-server] is pretty awesome)

```
$ live-server
``` 

or good ole python

```
$ python -m SimpleHTTPServer
```

### Todo's

- Search still a little broken
  - won't run last search every once in a while
- Vote on movie page
  - free text filter for table of voting movies
  - Show who's voted for that movie on mouse-over votes
  - Show movie synopsis on mouse over cover
  - Sort by votes / alpha / year / RT rating
- Watched movies
  - Admin role
    - can flag movies as watched near vote
  - Remove movies already watched from search results
  - Next Movie Night on <x> day showing <y> movie
- Archive movie page
  - Show movies we've already watched
  - Leverage some service to show if it's streamable with links
- Make service private functions symbols
- Better disabled styles
- ES6 stuff
  - default params
  - getter/setter
  - generators?
- Fix slide-up mechanism
  - Maybe some react tweener stuff for .slideUp() kind of functionality
- Stop promise canceling and try to set up event stream?
- Light node-backend
  - Obscure Firebase credentials
- Webpack notes
  - In js files I have to specify .jsx, but in .jsx files I can leave it off
- Make Isomorphic
  - es6 loader style vs isomorphic
    - Do I need commonJS to run it in node?
    - Probably note with --harmony right?
- Jest tests
  - Travis
  - Maybe some e2e stuff as well
- Login Page
  - Only allow hugeinc addresses
  - Handle if/when user logs out of G+
- ? - Just replace one table with the next when the user searches
License
----

MIT

[Firebase]:https://www.firebase.com/
[React]:http://facebook.github.io/react/
[jspm]:http://jspm.io/
[systemjs]:https://github.com/systemjs/systemjs
[live-server]:https://github.com/tapio/live-server
