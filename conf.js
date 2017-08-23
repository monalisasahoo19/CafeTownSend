// conf.js
exports.config = {
	//framework: 'jasmine',
	framework: 'mocha',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'http://cafetownsend-angular-rails.herokuapp.com',
	specs: ['tests/*.js'],
	multiCapabilities: [
		{
			'browserName': 'chrome'
		}
	],
	mochaOpts: {
		timeout: 100000,
		reporter: 'spec'
	}
}