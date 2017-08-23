const BasePage = require('../pageObjects/basePage');

class LoginPage extends BasePage {

	/**
	 * Get base url
	 *
	 * @return {string}
	 */
	 get baseUrl() {
		return 'http://cafetownsend-angular-rails.herokuapp.com';
	}

	/**
	 * Get url suffix
	 *
	 * @return {string}
	 */
	get urlSuffix() {
		return '/login';
	}

	/**
	 * Get the top banner
	 *
	 * @return {promise}
	 */
	static get mainDivWrapper() {
		return element(by.css('div.main-view-wrapper.main-view-wrapper-loggedIn'));
	}

	/**
	 * Get the username label
	 *
	 * @return {string}
	 */
	static get labelUsername() {
		return element(by.css('form#login-form > fieldset > label:nth-child(3) > span'));
	}

	/**
	 * Get the username field
	 *
	 * @return {string}
	 */
	static get inputUsername() {
		return element(by.model('user.name'));
	}

	/**
	 * Get the password label
	 *
	 * @return {string}
	 */
	static get labelPassword() {
		return element(by.css('form#login-form > fieldset > label:nth-child(4) > span'));
	}

	/**
	 * Get the password field
	 *
	 * @return {string}
	 */
	static get inputPassword() {
		return element(by.model('user.password'));
	}

	/**
	 * Get the login button
	 *
	 * @return {promise}
	 */
	static get btnLogin() {
		return element(by.css('button[type="submit"]'));
	}

	/**
	 * Get the error message paragraph
	 *
	 * @return {promise}
	 */
	static get headerErrorMessage() {
		return element(by.css('p.error-message'));
	}

}

module.exports = LoginPage;