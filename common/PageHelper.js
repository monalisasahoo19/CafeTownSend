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

	/**
	 * Convert the  delimited string to integer
	 *
	 * @return {int}
	 */
	static parseInt(commaDelimitedString) {
		return commaDelimitedString ? parseInt(commaDelimitedString.trim().replace(/,/, '')) : 0;
	}
}

module.exports = PageHelper;