'use strict';

// TODO: find a one-line way to pull in debug with a param
import Firebase from 'firebase';
import jsonp from 'jsonp';
import debugLib from 'debug';

let debug = debugLib('BadMoviePoll:Auth');

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
			debug('logged in');
			var request = gapi.client.plus.people.get({
				'userId': 'me'
			});
			request.execute(function(resp) {
				debug('profile fetched');
				self.profile = resp;
				self.profile.isAdmin = self.isAdmin(self.profile.id);
				self._callLoginHandlers(self.profile, true);
			});
		});
	}

	_setAdmin(snapshot){
		var snapObj = snapshot.val();
		debug('setting admin', snapObj);
		for( var key in snapObj){
			this._admin.push({
				id: key,
				profileId: snapObj[key]
			});
		}
	}

	isAdmin(profileId){
		debug('checking id is admin', this._admin, profileId);
		return !!this._admin.find(user => user.profileId === ''+profileId);
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
				debug('Sign-in state: ' + authResult['error']);
			}
		};
	}

}

export default new Auth();
