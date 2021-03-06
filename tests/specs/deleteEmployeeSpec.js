const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LandingPage = require('../pageObjects/landingPage');
const TestData = require('../testData/testData.json');
const CommonAssertions = require('../common/commonAssertions');
const LandingPageAction = require('../actions/landingPageAction');
const LoginAction = require('../actions/loginAction');

describe('CafeTownSend Delete Employee Page', () => {

	describe('Given the user is logged in and on the landing Page', () => {

		before(() => {
			return LoginAction.initLogin();
		});

		before(() => {
			return LandingPage.helloMessage.isPresent();
		});

		describe('When the top banner is displayed', () => {
			//Validates the top banner elements
			CommonAssertions.assertTopBanner();
		});

		//Create the employee then tear down as part of the delete process
		before(() => {
			LandingPage.createButton.click();
			LandingPageAction.createEmployee();
		});

		describe('When user clicks on the delete button on the given employee', () => {

			let previousEmployeeCount;
			let currentEmployeeFullName;

			before(() => {
				//It will store the list of employee count
				LandingPage.listOfEmployees.then((employees) => {
					previousEmployeeCount = employees.length;
				});
			});

			before(() => {
				// Search the first employee details created using firstname and lastname
				currentEmployeeFullName = TestData.create.firstName+' '+TestData.create.lastName;
				let elem= LandingPage.employeeRowsByName(currentEmployeeFullName);
				elem.get(0).click();
			});

			before(() => {
				LandingPage.deleteButton.click();
			});

			it('should display the pop up message', () => {

				let alertDialog = browser.switchTo().alert();

				expect(alertDialog.getText()).to.eventually.equal('Are you sure you want to delete '+currentEmployeeFullName+'?');

				alertDialog.accept();
			});

			//AssertionError: expected 1377 to equal 688 - This is a bug in the app

			it('should the deleted employee have been removed from the list', () => {

				LandingPage.listOfEmployees.then((employees) => {
					let currentEmployeeCount = employees.length;
					expect(currentEmployeeCount).to.equal(previousEmployeeCount-1);

				});

			});
		});
	});
});