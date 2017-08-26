const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LoginPage = require('../tests/pageObjects/loginPage');
const LandingPage = require('../tests/pageObjects/landingPage');
const TestData = require('./testData/testData.json');
const AssertHelper = require('../common/PageHelper');
const CSS_INVALID = 'ng-invalid';
const CSS_VALID = 'ng-valid';

describe.only('CafeTownSend Edit Employee Page', () => {

	describe('Given the user is logged in and on the landing Page', () => {
		let loginPage;
		before(() => {
			loginPage = new LoginPage(browser, expect);
			loginPage.open();
		});

		before(() => {
			LoginPage.inputUsername.sendKeys(TestData.login.validCredentials.userName);
			LoginPage.inputPassword.sendKeys(TestData.login.validCredentials.password);
			LoginPage.btnLogin.click();
		});

		before(() => {
			return LandingPage.helloMessage.isPresent();
		});

		describe('When user clicks on the edit button', () => {

			let currentEmployeeCount;
			before(() => {
				LandingPage.listOfEmployees.then((employees) => {
					currentEmployeeCount = employees.length;
				});
			});

			before(() => {
				// Search the first employee details created using firstname and lastname
				let elem= LandingPage.employeeRowsByName(TestData.create.firstName+' '+TestData.create.lastName);
				elem.get(0).click();
			});

			before(() => {
				LandingPage.editButton.click();
			});

			it('should display Back Button', () => {
				expect(LandingPage.backButton.getText()).to.eventually.equal('Back');
			});

			it('should display the First name label', () => {
				expect(LandingPage.firstNameLabel.getText()).to.eventually.equal('First name:');
			});

			it('should display the Last name label', () => {
				expect(LandingPage.lastNameLabel.getText()).to.eventually.equal('Last name:');
			});

			it('should display the Start date label', () => {
				expect(LandingPage.startDateLabel.getText()).to.eventually.equal('Start date:');
			});

			it('should display the Email label', () => {
				expect(LandingPage.emailLabel.getText()).to.eventually.equal('Email:');
			});

			it('should display Update Button', () => {
				expect(LandingPage.updateButtonFooter.getText()).to.eventually.equal('Update');
			});

			it('should display Delete Button', () => {
				expect(LandingPage.deleteButtonFooter.getText()).to.eventually.equal('Delete');
			});

		});
	});

});