const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LandingPage = require('../pageObjects/landingPage');
const TestData = require('../testData/testData.json');
const AssertHelper = require('../common/PageHelper');
const LoginAction = require('../actions/loginAction');
const CommonAssertions = require('../common/commonAssertions');
const LandingPageAction = require('../actions/landingPageAction');

const CSS_INVALID = 'ng-invalid';
const CSS_VALID = 'ng-valid';

describe('CafeTownSend Create Employee Page', () => {

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

		describe('When the top banner is displayed', () => {
			CommonAssertions.assertTopBanner();
		});

		describe('When user clicks on the create button', () => {

			let currentEmployeeCount;
			before(() => {
				LandingPage.listOfEmployees.then((employees) => {
					currentEmployeeCount = employees.length;
				});
			});

			before(() => {
				LandingPage.createButton.click();
			});

			describe('When user is on the Create form should display the labels', () => {

				CommonAssertions.assertCreateUpdateLabels();

				it('should display Add Button', () => {
					expect(LandingPage.addButton.isDisplayed()).to.eventually.be.true;
				});
			});

			describe('When user clicks on the Add button to create the employee', () => {

				before(() => {
					LandingPageAction.createEmployee();
				});

				it('should create an employee details successfully', () => {
					expect(LandingPage.listOfEmployees.count()).to.eventually.equal(currentEmployeeCount + 1);
				});
			});

			describe('When user clicks on Add button with missing inputs', () => {

				before(() => {
					LandingPage.createButton.click();
				});

				describe('When first name is not entered', () => {

					before(() => {
						LandingPage.inputFirstName.click();
						LandingPage.addButton.click();
					});

					it('should display the required field validation when first name is not entered', () => {
						expect(AssertHelper.assertClass(LandingPage.inputFirstName, CSS_INVALID)).to.eventually.be.true;
					});

					it('should not display required field validation when first name is entered', () => {
						LandingPage.inputFirstName.sendKeys(TestData.create.firstName);
						expect(AssertHelper.assertClass(LandingPage.inputFirstName, CSS_VALID)).to.eventually.be.true;
					});
				});

				describe('When last name is not entered', () => {

					before(() => {
						LandingPage.inputLastName.click();
						LandingPage.addButton.click();
					});

					it('should display the required field validation when last name is not entered', () => {
						expect(AssertHelper.assertClass(LandingPage.inputLastName, CSS_INVALID)).to.eventually.be.true;
					});

					it('should not display required field validation when last name is entered', () => {
						LandingPage.inputLastName.sendKeys(TestData.create.lastName);
						expect(AssertHelper.assertClass(LandingPage.inputLastName, CSS_VALID)).to.eventually.be.true;
					});
				});

				describe('When start date is not entered', () => {

					before(() => {
						LandingPage.inputStartDate.click();
						LandingPage.addButton.click();
					});

					it('should display the required field validation when start date is not entered', () => {
						expect(AssertHelper.assertClass(LandingPage.inputStartDate, CSS_INVALID)).to.eventually.be.true;
					});

					it('should not display required field validation when start date is entered', () => {
						LandingPage.inputStartDate.sendKeys(TestData.create.startDate);
						expect(AssertHelper.assertClass(LandingPage.inputStartDate, CSS_VALID)).to.eventually.be.true;
					});
				});

				describe('When email is not entered', () => {

					before(() => {
						LandingPage.inputEmail.click();
						LandingPage.addButton.click();
					});

					it('should display the required field validation when email is not entered', () => {
						expect(AssertHelper.assertClass(LandingPage.inputEmail, CSS_INVALID)).to.eventually.be.true;
					});

					it('should not display required field validation when email is entered', () => {
						LandingPage.inputEmail.sendKeys(TestData.create.email);
						expect(AssertHelper.assertClass(LandingPage.inputEmail, CSS_VALID)).to.eventually.be.true;
					});
				});
			});

			describe('When user click on cancel button', () => {

				before(() => {
					LandingPage.cancelButton.click();
				});

				it('should navigate back to the employee list', () => {
					expect(LandingPage.employeeListElement.isDisplayed()).to.eventually.be.true;
				});

				it('should display the create button', () => {
					expect(LandingPage.createButton.isDisplayed()).to.eventually.be.true;
				});
			});
		});
	});
});