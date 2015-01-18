'use strict';

import Firebase from 'firebase';
import jsonp from 'jsonp';
import debug from 'debug';

let log = debug('BadMoviePoll:Auth');

class Auth {
	constructor() {
		this.isLoggedIn = false;
		this.profile = null;

		this._admin = [];

		this._loginCbs = [];

		this._registerGLobinCB.call(this);
		this._injectGLogin();

		this.firebase = new Firebase('https://amber-inferno-2020.firebaseio.com');
		this.firebase.child('auth/admin').on('value', this._setAdmin.bind(this));
	}

	login(result){
		var self = this;

		this.isLoggedIn = true;

		// Ergh, need to wrap in a promimse or something, not a fan as it stands
		gapi.client.load('plus','v1', function(){
			log('logged in');
			var request = gapi.client.plus.people.get({
				'userId': 'me'
			});
			request.execute(function(resp) {
				log('profile fetched');
				self.profile = resp;
				self._callLoginHandlers(self.profile, true);
			});
		});
	}

	_setAdmin(snapshot){
		var snapObj = snapshot.val();
		for( var key in snapObj){
			this._admin.push({
				id: key,
				profileId: snapObj[key]
			});
		}
	}

	isAdmin(profileId){
		return this._admin.find(user => user.profileId === profileId);
	}

	registerLoginHandler(fn){
		this._loginCbs.push(fn);
	}

	unregisterLoginHandler(remFn){
		this._loginCbs = this._loginCbs.filter( fn => fn !== remFn);
	}

	_callLoginHandlers(profile, isLoggedIn){
		this._loginCbs.map( fn => fn(profile, isLoggedIn) );
	}

	_injectGLogin(){
		var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		po.src = 'https://apis.google.com/js/client:platform.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	}

	_registerGLobinCB(){
		var self = this;
		window.signinCallback = function(authResult) {
			if (authResult['status']['signed_in']) {
				self.login(authResult);
			} else {
				console.log('Sign-in state: ' + authResult['error']);
			}
		};
	}

}

export default new Auth();
