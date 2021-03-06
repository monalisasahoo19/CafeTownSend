const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LandingPage = require('../pageObjects/landingPage');
const TestData = require('../testData/testData.json');
const CommonAssertions = require('../common/commonAssertions');
const LoginAction = require('../actions/loginAction');

describe('CafeTownSend Edit Employee Page', () => {

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
			//Validates the top banner elements
			CommonAssertions.assertTopBanner();
		});

		describe('When user clicks on the edit button', () => {

			before(() => {
				// Search the first employee details created using firstname and lastname
				let elem= LandingPage.employeeRowsByName(TestData.create.firstName+' '+TestData.create.lastName);
				elem.get(0).click();
			});

			before(() => {
				LandingPage.editButton.click();
			});

			describe('When user is on the edit form should display the labels', () => {
				CommonAssertions.assertCreateUpdateLabels();
			});

			it('should display Back Button', () => {
				expect(LandingPage.backButton.getText()).to.eventually.equal('Back');
			});

			it('should display Update Button', () => {
				expect(LandingPage.updateButtonFooter.getText()).to.eventually.equal('Update');
			});

			it('should display Delete Button', () => {
				expect(LandingPage.deleteButtonFooter.getText()).to.eventually.equal('Delete');
			});

			describe('When user clicks on the update button', () => {

				before(() => {
					LandingPage.inputEmail.clear();
					LandingPage.inputEmail.sendKeys(TestData.update.email);
					LandingPage.updateButtonFooter.click();
				});

				it('should display the employee list on success', () => {
					expect(LandingPage.employeeListElement.isDisplayed()).to.eventually.be.true;
				});
			});

			describe('When user clicks on the delete button', () => {

				let currentEmployeeFullName;
				before(() => {
					// Search the first employee details created using firstName and lastName
					currentEmployeeFullName = TestData.create.firstName+' '+TestData.create.lastName;
					let elem= LandingPage.employeeRowsByName(currentEmployeeFullName);
					elem.get(0).click();
					LandingPage.editButton.click();
				});

				before(() => {
				    LandingPage.deleteButtonFooter.click();
				});

				it('should display the pop up message', () => {
					let alertDialog = browser.switchTo().alert();
					expect(alertDialog.getText()).to.eventually.equal('Are you sure you want to delete '+currentEmployeeFullName+'?');
					alertDialog.accept();
				});
			});
		});
	});
});