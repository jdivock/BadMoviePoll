'use strict';

jest.dontMock('../lib/components/Login/Welcome.jsx');

describe('Welcome.jsx', function(){
	it('can be built in jest', function(){

		var React = require('react/addons');
		var Welcome = require('../lib/components/Login/Welcome.jsx');

		var TestUtils = React.addons.TestUtils;

		var authMock = { name: 'jay dee' };

		var WelcomeTestCmp = TestUtils.renderIntoDocument(
			<Welcome auth={authMock} />
		);

		var header = TestUtils.findRenderedDOMComponentWithTag(WelcomeTestCmp, 'h5');

		expect(header.getDOMNode().textContent).toEqual('Signed in as jay dee');

	});
});
