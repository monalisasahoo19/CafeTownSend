const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const LandingPage = require('../pageObjects/landingPage');
const BasePage = require('../pageObjects/basePage');

class CommonAssertions {

	static assertCreateUpdateLabels () {

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
	}

	static assertTopBanner() {

		it('should display the title as "CafeTownsend-AngularJS-Rails"', () => {
			expect(browser.getTitle()).to.eventually.equal('CafeTownsend-AngularJS-Rails');
		});

		it('should display the banner with a background asset', () => {

			expect(BasePage.mainDivWrapper.isPresent()).to.eventually.be.true;

			return BasePage.mainDivWrapper.getCssValue("background-image").then((assetUrl) => {
				return expect(assetUrl).to.include('.png');
			});
		});
	}
}

module.exports = CommonAssertions;