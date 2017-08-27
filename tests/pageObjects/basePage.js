class BasePage {

	/**
	 * Constructor
	 *
	 * @param {Browser} browser
	 */
	constructor(browser) {
		this.browser = browser;

		//process.env.INSTANCE should be injected from the CI Server
		this.url = process.env.INSTANCE || this.baseUrl;
		this.url += this.urlSuffix;
	}

	/**
	 * Open page
	 *
	 * @return {Promise}
	 */
	open() {
		return this.browser.driver.get(this.url);
	}

	/**
	 * Get base url
	 *
	 * @description The url instance
	 *
	 * @return {string}
	 */
	get getBaseUrl() {
		return '';
	}

	/**
	 * Get url suffix
	 *
	 * @description This the rest of the url
	 *
	 * @return {string}
	 */
	get urlSuffix() {
		return '';
	}

	/**
	 * Title of the page
	 *
	 * @description returns the title of the page
	 *
	 * @return {string}
	 */
	get getTitle() {
		return this.browser.getTitle();
	}


}

module.exports = BasePage;
