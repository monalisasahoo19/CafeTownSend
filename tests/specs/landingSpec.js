const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LandingPage = require('../pageObjects/landingPage');
const TestData = require('../testData/testData.json');
const AssertHelper = require('../common/PageHelper');
const LoginAction = require('../actions/loginAction');

describe('CafeTownSend Landing Page', () => {

	describe('Given the user is logged in and on the landing Page', () => {

		before(() => {
			return LoginAction.initLogin();
		});

		before(() => {
			return LandingPage.helloMessage.isPresent();
		});

		after(() => {
			return LandingPage.logoutButton.click();
		});

		it('should display the "Hello username" message on successful Login ', () => {
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

		it('should display the employee list', () => {
			expect(LandingPage.listOfEmployees.count()).to.eventually.be.above(0);
		});

		it('should display the "Edit" button', () => {
			expect(LandingPage.editButton.isDisplayed()).to.eventually.be.true;
		});

		it('should "Edit" button be disabled', () => {
			expect(AssertHelper.assertClass(LandingPage.editButton, 'disabled')).to.eventually.be.true;
		});

		it('should display the "Delete" button', () => {
			expect(LandingPage.deleteButton.isDisplayed()).to.eventually.be.true;
		});

		it('should "Delete" button be disabled', () => {
			expect(AssertHelper.assertClass(LandingPage.deleteButton, 'disabled')).to.eventually.be.true;
		});

	});

});