
class TestHelper {
	/**
	 * Helper function to avoid duplicate code
	 * Should able to reuse the common test cases across spec files
	 *
	 * @return {promise}
	 */
	static importTest(name, path) {
		describe(name, function() {
			require(path);
		});
	};
}

module.exports = TestHelper;