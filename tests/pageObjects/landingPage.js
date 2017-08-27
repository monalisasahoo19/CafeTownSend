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
		return element(by.css('div.header-container > p.main-button'));
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
	 * Get the cancel button
	 *
	 * @return {promise}
	 */
	static get cancelButton() {
		return element(by.css('a.subButton.bCancel'));
	}

	/**
	 * Get the back button
	 *
	 * @return {promise}
	 */
	static get backButton() {
		return element(by.css('a.subButton.bBack'));
	}

	/**
	 * Get the firstName Label
	 *
	 * @return {string}
	 */
	static get firstNameLabel() {
		return element(by.css('form[name="employeeForm"] label:nth-child(3) > span'));
	}

	/**
	 * Get the firstName input field
	 *
	 * @return {promise}
	 */
	static get inputFirstName() {
		return element(by.model('selectedEmployee.firstName'));
	}

	/**
	 * Get the lastName Label
	 *
	 * @return {string}
	 */
	static get lastNameLabel() {
		return element(by.css('form[name="employeeForm"] label:nth-child(4) > span'));
	}

	/**
	 * Get the lastName input field
	 *
	 * @return {promise}
	 */
	static get inputLastName() {
		return element(by.model('selectedEmployee.lastName'));
	}

	/**
	 * Get the StartDate Label
	 *
	 * @return {string}
	 */
	static get startDateLabel() {
		return element(by.css('form[name="employeeForm"] label:nth-child(5) > span'));
	}

	/**
	 * Get the StartDate input field
	 *
	 * @return {promise}
	 */
	static get inputStartDate() {
		return element(by.model('selectedEmployee.startDate'));
	}

	/**
	 * Get the Email Label
	 *
	 * @return {string}
	 */
	static get emailLabel() {
		return element(by.css('form[name="employeeForm"] label:nth-child(6) > span'));
	}

	/**
	 * Get the Email input field
	 *
	 * @return {promise}
	 */
	static get inputEmail() {
		return element(by.model('selectedEmployee.email'));
	}

	/**
	 * Get the Add Button
	 *
	 * @return {promise}
	 */
	static get addButton() {
		return element(by.css('button[type="submit"]:nth-child(2)'));
	}

	/**
	 * Get the footer Update Button
	 *
	 * @return {promise}
	 */
	static get updateButtonFooter() {
		return element(by.css('button[type="submit"]:nth-child(1)'));
	}

	/**
	 * Get the footer Delete Button
	 *
	 * @return {promise}
	 */
	static get deleteButtonFooter() {
		return element(by.css('div.formFooter > p.main-button'));
	}

	/**
	 * Get the list of employees
	 *
	 * @return {promise}
	 */
	static get listOfEmployees() {
		return element.all(by.repeater('employee in employees'));
	}

	/**
	 * Get the DOM element for the list of employees
	 *
	 * @return {promise}
	 */
	static get employeeListElement() {
		return element(by.id('employee-list'));
	}

	/**
	 * Get employee by name
	 *
	 * @return {promise}
	 */
	static employeeRowsByName(filterText) {
		return this.listOfEmployees.filter((item) => {
			return item.getText().then((label) => {
				 return (label === filterText);
			});
		});
	}
}

module.exports = LandingPage;