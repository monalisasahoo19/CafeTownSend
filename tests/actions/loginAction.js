
const LoginPage = require('../pageObjects/loginPage');
const TestData = require('../testData/testData.json');

class LoginAction {

	static login () {
		let loginPage = new LoginPage(browser);
		loginPage.open();

		LoginPage.inputUsername.sendKeys(TestData.login.validCredentials.userName);
		LoginPage.inputPassword.sendKeys(TestData.login.validCredentials.password);
		LoginPage.btnLogin.click();

	}
}

module.exports = LoginAction;