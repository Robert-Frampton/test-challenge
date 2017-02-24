'use strict';

/**
 * Creates an object composed of the own and inherited enumerable properties
 * of `object` that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {...(string|string[])} [keys] The properties to omit.
 */
function omit(object, keys) {
	var result = {};

	if (!keys instanceof Array) {
		keys = [keys];
	}

	Object.keys(object).forEach(function(key) {
		if (keys.indexOf(key) < 0) {
			result[key] = object[key];
		}
	});

	return result;
}

module.exports = omit;
