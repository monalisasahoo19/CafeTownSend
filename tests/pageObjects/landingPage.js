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

	/**
	 * Get the firstName Label
	 *
	 * @return {promise}
	 */
	static get firstNameLabel() {
		return element(by.css('body > div > div > div > form > fieldset > label:nth-child(3) > span'));
	}

	/**
	 * Get the lastName Label
	 *
	 * @return {promise}
	 */
	static get lastNameLabel() {
		return element(by.css('body > div > div > div > form > fieldset > label:nth-child(4) > span'));
	}

	/**
	 * Get the StartDate Label
	 *
	 * @return {promise}
	 */
	static get startDateLabel() {
		return element(by.css('body > div > div > div > form > fieldset > label:nth-child(5) > span'));
	}

	/**
	 * Get the Email Label
	 *
	 * @return {promise}
	 */
	static get emailLabel() {
		return element(by.css('body > div > div > div > form > fieldset > label:nth-child(6) > span'));
	}

	/**
	 * Get the Add Button
	 *
	 * @return {promise}
	 */
	static get addButton() {
		return element(by.css('button[type="submit"]:nth-child(2)'));
	}
}

module.exports = LandingPage;