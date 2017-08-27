const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LoginPage = require('../pageObjects/loginPage');
const LandingPage = require('../pageObjects/landingPage');
const TestData = require('../testData/testData.json');
const LoginAction = require('../actions/loginAction');

describe('CafeTownSend Delete Employee Page', () => {

	describe('Given the user is logged in and on the landing Page', () => {

		before(() => {
			return LoginAction.initLogin();
		});

		before(() => {
			return LandingPage.helloMessage.isPresent();
		});

		describe('When user clicks on the edit button on the given employee', () => {

			let previousEmployeeCount;
			let currentEmployeeFullName;

			before(() => {
				LandingPage.listOfEmployees.then((employees) => {
					previousEmployeeCount = employees.length;

					console.log("previousEmployeeCount "+previousEmployeeCount);

				});
			});

			before(() => {

				currentEmployeeFullName = TestData.create.firstName+' '+TestData.create.lastName;
				let elem= LandingPage.employeeRowsByName(currentEmployeeFullName);
				elem.get(0).click();


			});

			before(() => {
				LandingPage.deleteButton.click();
			});

			it('should display the pop up message', () => {

				var alertDialog = browser.switchTo().alert();


				expect(alertDialog.getText()).to.eventually.equal('Are you sure you want to delete '+currentEmployeeFullName+'?');

				alertDialog.accept();
			});

			it('should the deleted employee have been removed from the list', () => {

				LandingPage.listOfEmployees.then((employees) => {
					let currentEmployeeCount = employees.length;

					console.log("currentEmployeeCount "+currentEmployeeCount);

					expect(currentEmployeeCount).to.equal(previousEmployeeCount-1);

				});

			});

		});
	});

});