
const LoginPage = require('../pageObjects/loginPage');
const TestData = require('../testData/testData.json');

class LoginAction {

	static initLogin () {
		let loginPage = new LoginPage(browser);
		loginPage.open();
		this.loginWithValidCredentials();
	}

	static loginWithValidCredentials() {

		LoginPage.inputUsername.sendKeys(TestData.login.validCredentials.userName);
		LoginPage.inputPassword.sendKeys(TestData.login.validCredentials.password);
		LoginPage.btnLogin.click();
	}

	static loginWithInvalidCredentials() {

		LoginPage.inputUsername.sendKeys(TestData.login.invalidCredentials.userName);
		LoginPage.inputPassword.sendKeys(TestData.login.invalidCredentials.password);
		LoginPage.btnLogin.click();
	}

	static loginWithInput (userName,password) {

		LoginPage.inputUsername.sendKeys(userName);
		LoginPage.inputPassword.sendKeys(password);
		LoginPage.btnLogin.click();

	}

	static clearLoginEntries() {
		LoginPage.inputUsername.clear();
		LoginPage.inputPassword.clear();
	}
}

module.exports = LoginAction;