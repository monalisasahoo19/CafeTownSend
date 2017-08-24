class PageHelper {
	/**
	 * Validates if the element has given class
	 *
	 * @return {promise}
	 */
	static assertClass(element,clsName) {
		return element.getAttribute('class').then((cls) => {
			return cls.includes(clsName);
		});
	}
}

module.exports = PageHelper;