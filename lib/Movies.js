import jsonp from 'jsonp';

class Movies {
	constructor() {
		this.rottenTomatoesUrl = 'http://api.rottentomatoes.com/api/public/v1.0/';
	}

	search(query) {
		return new Promise((resolve, reject) => {
			jsonp(
				this.rottenTomatoesUrl + 'movies.json?q=' + query + '&page_limit=10&page=1&apikey=qd9psweg5mupm8wqdct622bk', (err, data) => {
					err ? reject(err) : resolve(data)
				}
			);
		});
	}


}

export default new Movies();
