const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LoginPage = require('../tests/pageObjects/loginPage');
const LandingPage = require('../tests/pageObjects/landingPage');
const TestData = require('./testData/testData.json');

describe('CafeTownSend Login', () => {

	describe('Given CafeTownSend Login Page', () => {
		let loginPage;
		before(() => {
			loginPage = new LoginPage(browser, expect);
			loginPage.open();
		});

		describe('When the login page is loaded', () => {
			it('should display the title as "CafeTownsend-AngularJS-Rails"', () => {
				expect(loginPage.getTitle).to.eventually.equal('CafeTownsend-AngularJS-Rails');
			});
			it('should display the banner with a background asset', () => {
				expect(LoginPage.mainDivWrapper.isPresent()).to.eventually.be.true;
				return LoginPage.mainDivWrapper.getCssValue("background-image").then((assetUrl) => {
					return expect(assetUrl).to.include('.png');
				});
			});
			it('should display the username label', () => {
				expect(LoginPage.labelUsername.getText()).to.eventually.equal('Username*');
			});
			it('should display the password label', () => {
				expect(LoginPage.labelPassword.getText()).to.eventually.equal('Password*');
			});
			it('should display the login button', () => {
				expect(LoginPage.btnLogin.getText()).to.eventually.equal('Login');
			});

			describe('UserName and password field entry behaviour', () => {
				describe('When the user clicks on the userName input field', () => {
					before(() => {
						LoginPage.inputUsername.click();
					});
					it('should highlight the userName input field as required', () => {
						LoginPage.inputUsername.getAttribute('class').then((cls) => {
							console.log(cls);
							expect(cls).to.include('ng-invalid');
						});
					});
					describe('When user enters any value', () => {
						before(() => {
							LoginPage.inputUsername.sendKeys('User Name');
						});
						it('should disappear the highlight ', () => {
							LoginPage.inputUsername.getAttribute('class').then((cls) => {
								expect(cls).to.include('ng-valid');
							});
						});
					});
				});

				describe('When the user clicks on the password input field', () => {
					before(() => {
						LoginPage.inputPassword.click();
					});
					it('should highlight the password input field as required', () => {
						LoginPage.inputPassword.getAttribute('class').then((cls) => {
							console.log(cls);
							expect(cls).to.include('ng-invalid');
						});
					});
					describe('When user enters any value', () => {
						before(() => {
							LoginPage.inputPassword.sendKeys('Password');
						});
						it('should disappear the highlight ', () => {
							LoginPage.inputPassword.getAttribute('class').then((cls) => {
								expect(cls).to.include('ng-valid');
							});
						});
					});
				});

				after(() => {
					LoginPage.inputUsername.clear();
					LoginPage.inputPassword.clear();
				});
			});

			describe('When user clicks on the login button with invalid credentials', () => {
				before(() => {
					LoginPage.inputUsername.sendKeys(TestData.login.invalidCredentials.userName);
					LoginPage.inputPassword.sendKeys(TestData.login.invalidCredentials.password);
					LoginPage.btnLogin.click();
				});

				it('should display the "Invalid username or password" message on login failure', () => {
					expect(LoginPage.headerErrorMessage.getText()).to.eventually.equal('Invalid username or password!');
				});

				after(() => {
					LoginPage.inputUsername.clear();
					LoginPage.inputPassword.clear();
				});
			});

			describe('When user clicks on the login button with valid credentials', () => {

				before(() => {
					LoginPage.inputUsername.sendKeys(TestData.login.validCredentials.userName);
					LoginPage.inputPassword.sendKeys(TestData.login.validCredentials.password);
					LoginPage.btnLogin.click();
				});

				before(() => {
					return LandingPage.helloMessage.isPresent();
				});

				it('should display the "Hello username" message on successful login', () => {
					expect(LandingPage.helloMessage.getText()).to.eventually.equal('Hello ' + TestData.login.validCredentials.userName);
				});

			});

		});

	});

});
