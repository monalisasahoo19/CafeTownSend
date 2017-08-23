const BasePage = require('../pageObjects/basePage');

class LandingPage extends BasePage {

	/**
	 * Get 'Hello' welcome message
	 *
	 * @return {string}
	 */
	static get helloMessage() {
		return element(by.id('greetings'));
	}

}

module.exports = LandingPage;