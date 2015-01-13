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

- + for movie not voted, - for movie already voted
  - subtract vote function
- Auto-complete for movie search
  - Just auto-execute search with input buffer
- Combine add / vote movie tables to one component
- Add movie workflow
  - clear search button
- Vote on movie page
  - Link to RT
  - free text filter for table of voting movies
  - Show who's voted for that movie on mouse-over votes
  - Show movie synopsis on mouse over cover
  - Sort by votes / alpha / year / RT rating
- Case where removing the last vote removes movie from list
- Handle movies that have already been accepted and viewed
- Next Movie Night on <x> day showing <y> movie
- Vote rows and Add movie rows should be the same component
- Just replace one table with the next when the user searches
- Better disabled styles
- Separate vote / total cells
- Make vote an actual button
- Jest tests
  - Maybe some e2e stuff as well
- Login Page
  - Only allow hugeinc addresses
  - Handle if/when user logs out of G+

License
----

MIT

[Firebase]:https://www.firebase.com/
[React]:http://facebook.github.io/react/
[jspm]:http://jspm.io/
[systemjs]:https://github.com/systemjs/systemjs
[live-server]:https://github.com/tapio/live-server
