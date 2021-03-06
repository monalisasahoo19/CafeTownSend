const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LoginPage = require('../pageObjects/loginPage');
const LandingPage = require('../pageObjects/landingPage');
const TestData = require('../testData/testData.json');
const AssertHelper = require('../common/PageHelper');
const CommonAssertions = require('../common/commonAssertions');
const LoginAction = require('../actions/loginAction');

const CSS_INVALID = 'ng-invalid';
const CSS_VALID = 'ng-valid';

describe('CafeTownSend Login', () => {

	describe('Given CafeTownSend Login Page', () => {
		let loginPage;
		before(() => {
			loginPage = new LoginPage(browser);
			loginPage.open();
		});

		describe('When the Login page is loaded', () => {

			describe('When the top banner is displayed', () => {
				//Validates the top banner elements
				CommonAssertions.assertTopBanner();
			});

			it('should display the username label', () => {
				expect(LoginPage.labelUsername.getText()).to.eventually.equal('Username*');
			});

			it('should display the password label', () => {
				expect(LoginPage.labelPassword.getText()).to.eventually.equal('Password*');
			});

			it('should display the Login button', () => {
				expect(LoginPage.btnLogin.getText()).to.eventually.equal('Login');
			});

			describe('UserName and password field entry behaviour', () => {

				describe('When the user clicks on the userName input field', () => {

					before(() => {
						LoginPage.inputUsername.click();
					});

					it('should highlight the userName input field as required', () => {
						expect(AssertHelper.assertClass(LoginPage.inputUsername, CSS_INVALID)).to.eventually.be.true;
					});

					describe('When user enters any value', () => {

						before(() => {
							LoginPage.inputUsername.sendKeys('User Name');
						});

						it('should disappear the highlight ', () => {
							expect(AssertHelper.assertClass(LoginPage.inputUsername, CSS_VALID)).to.eventually.be.true;
						});
					});
				});

				describe('When the user clicks on the password input field', () => {

					before(() => {
						LoginPage.inputPassword.click();
					});

					it('should highlight the password input field as required', () => {
						expect(AssertHelper.assertClass(LoginPage.inputPassword, CSS_INVALID)).to.eventually.be.true;

					});

					describe('When user enters any value', () => {
						before(() => {
							LoginPage.inputPassword.sendKeys('Password');
						});
						it('should disappear the highlight ', () => {
							expect(AssertHelper.assertClass(LoginPage.inputPassword, CSS_VALID)).to.eventually.be.true;
						});
					});
				});

				after(() => {
					LoginAction.clearLoginEntries();
				});
			});

			describe('When user clicks on the Login button with invalid credentials', () => {

				before(() => {
					LoginAction.loginWithInvalidCredentials();
				});

				it('should display the "Invalid username or password" message on Login failure', () => {
					expect(LoginPage.headerErrorMessage.getText()).to.eventually.equal('Invalid username or password!');
				});

				after(() => {
					LoginAction.clearLoginEntries();
				});
			});

			describe('When user clicks on the Login button with valid credentials', () => {

				before(() => {
					LoginAction.loginWithValidCredentials();
				});

				before(() => {
					return LandingPage.helloMessage.isPresent();
				});

				it('should display the "Hello username" message on successful Login', () => {
					expect(LandingPage.helloMessage.getText()).to.eventually.equal('Hello ' + TestData.login.validCredentials.userName);
				});

				describe('When user clicks on the logout button', () => {
					before(() => {
						LandingPage.logoutButton.click();
					});

					it('should display the username label', () => {
					    expect(LoginPage.labelUsername.getText()).to.eventually.equal('Username*');
					});
				});
			});
		});
	});
});
