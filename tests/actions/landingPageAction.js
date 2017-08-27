
const LandingPage = require('../pageObjects/landingPage');
const TestData = require('../testData/testData.json');

class LandingPageAction {

	static createEmployee () {
		LandingPage.inputFirstName.sendKeys(TestData.create.firstName);
		LandingPage.inputLastName.sendKeys(TestData.create.lastName);
		LandingPage.inputStartDate.sendKeys(TestData.create.startDate);
		LandingPage.inputEmail.sendKeys(TestData.create.email);
		LandingPage.addButton.click();
	}
}

module.exports = LandingPageAction;