importTest = (name, path) => {
	describe(name, () => {
		require(path);
	});
}

describe("CafeTownSend Functional Tests", function () {
	before(function () {
		console.log("Starting the tests");
	});

	importTest("Login", './tests/specs/loginSpec');
	importTest("Home/Landing Page", './tests/specs/landingSpec');
	importTest("Create Employee", './tests/specs/createEmployeeSpec');
	importTest("Edit Employee", './tests/specs/editEmployeeSpec');
	importTest("Delete Employee", './tests/specs/deleteEmployeeSpec');

	after(function () {
		console.log("After all the tests");
	});
});