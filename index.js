// You could avoid this by specifying all the test in conf.js like specs: ['tests/specs/*.js']
// The advantage of having this as separate file are
//		1.More control of running the scripts in order
//		2.With global before/beforeEach/after/afterEach you can able to bootstrap ot tear down any resources if any

importTest = (name, path) => {
	describe(name, () => {
		require(path);
	});
};

describe("CafeTownSend Functional Tests", function () {

	before(() => {
		console.log("Starting the tests");
	});

	importTest("Login", './tests/specs/loginSpec');
	importTest("Home/Landing Page", './tests/specs/landingSpec');
	importTest("Create Employee", './tests/specs/createEmployeeSpec');
	importTest("Edit Employee", './tests/specs/editEmployeeSpec');
	importTest("Delete Employee", './tests/specs/deleteEmployeeSpec');

	after(() => {
		console.log("After all the tests");
	});

});