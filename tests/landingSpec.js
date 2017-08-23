const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LoginPage = require('../tests/pageObjects/loginPage');
const LandingPage = require('../tests/pageObjects/landingPage');
const TestData = require('./testData/testData.json');
const AssertHelper = require('../common/AssertHelper');

describe.only('CafeTownSend Landing/Private Home Page', () => {

	describe('Given the user is logged in and on the Private Home Page', () => {
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

		it('should display the "Hello username" message on successful login ', () => {
			expect(LandingPage.helloMessage.getText()).to.eventually.equal('Hello ' + TestData.login.validCredentials.userName);
		});
		it('should display the logout button', () => {
			expect(LandingPage.logoutButton.isDisplayed()).to.eventually.be.true;
		});

		it('should display the create button', () => {
			expect(LandingPage.createButton.isDisplayed()).to.eventually.be.true;
		});

		it('should create button be enabled', () => {
			expect(LandingPage.createButton.isEnabled()).to.eventually.be.true;
			expect(AssertHelper.assertClass(LandingPage.createButton, 'disabled')).to.eventually.be.false;

		});

		it('should display the edit button', () => {
			expect(LandingPage.editButton.isDisplayed()).to.eventually.be.true;
		});

		it('should edit button be disabled', () => {
			expect(AssertHelper.assertClass(LandingPage.editButton, 'disabled')).to.eventually.be.true;
		});

		describe('Given the user details are known create a customer', () => {
			before(() => {
				LandingPage.createButton.click();
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

			it('should display Add Button', () => {
				expect(LandingPage.addButton.isDisplayed()).to.eventually.be.true;
				expect(LandingPage.addButton.getText()).to.eventually.equal('Add');
			});
		});
	});

});