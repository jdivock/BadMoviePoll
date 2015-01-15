# Bad Movie Poll

Basic Movie Polling site for Bad Movie Night™ @ Huge

### Version
0.0.1

### Tech

* [Firebase] - wooo, live db
* [React] - sup
* [jspm] - github + npm and stuff
* [systemjs] - trying this out, es6 module loading


### Installation

You need JSPM installed globally:

```sh
$ npm i -g jspm
```

```sh
$ jspm install
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

- Move to webpack
- Vote on movie page
  - free text filter for table of voting movies
  - Show who's voted for that movie on mouse-over votes
  - Show movie synopsis on mouse over cover
  - Sort by votes / alpha / year / RT rating
- Handle movies that have already been accepted and viewed
  - Remove movies already watched from search results
  - Next Movie Night on <x> day showing <y> movie
- Make service private functions symbols
- Better disabled styles
- ES6 stuff
  - default params
  - getter/setter
  - generators?
- Stop promise canceling and try to set up event stream?
- Clean up movie results with max-height animation
- Jest tests
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
