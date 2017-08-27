
const LoginPage = require('../pageObjects/loginPage');
const TestData = require('../testData/testData.json');

class LoginAction {

	static initLogin () {
		let loginPage = new LoginPage(browser);
		loginPage.open();
		this.loginWithValidCredentials();
	}

	static loginWithValidCredentials() {
		this.loginWithInput(TestData.login.validCredentials.userName,TestData.login.validCredentials.password);
	}

	static loginWithInvalidCredentials() {
		this.loginWithInput(TestData.login.invalidCredentials.userName,TestData.login.invalidCredentials.password);
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