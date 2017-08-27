// conf.js
exports.config = {
	framework: 'mocha',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'http://cafetownsend-angular-rails.herokuapp.com',
	specs: ['index.js'],
	multiCapabilities: [
		{
			'browserName': 'chrome'
		}
	],
	mochaOpts: {
		timeout: 100000,
		//reporter: 'spec',
		reporter: 'mochawesome-screenshots',
		reporterOptions: {
			reportDir: 'Reports', //The directory which stores the reports
			reportName: 'TestExecutionReport',
			reportTitle: 'cafeTOWNSEND QA Reports',
			takePassedScreenshot: true, //Option to control the scope of screenshots
			clearOldScreenshots: true
		}
	}
};