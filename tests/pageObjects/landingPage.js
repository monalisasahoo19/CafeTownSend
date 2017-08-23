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


	/**
	 * Get the logout button
	 *
	 * @return {promise}
	 */
	static get logoutButton() {
		return element(by.css('p.main-button'));
	}

	/**
	 * Get the create button
	 *
	 * @return {promise}
	 */
	static get createButton() {
		return element(by.id('bAdd'));
	}

	/**
	 * Get the edit button
	 *
	 * @return {promise}
	 */
	static get editButton() {
		return element(by.id('bEdit'));
	}

	/**
	 * Get the delete button
	 *
	 * @return {promise}
	 */
	static get deleteButton() {
		return element(by.id('bDelete'));
	}
}

module.exports = LandingPage;