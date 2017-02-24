'use strict';

/**
 * Runs the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * @param {Array} tasks - A collection containing functions to run, each
 * function is passed a `callback(err, result)` it must call on completion with
 * an error `err` (which can be `null`) and an optional `result` value.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array containing all
 * the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 */
function series(tasks, callback) {
	var results = [];
	var i = 0;

	var task = tasks[i];

	var next = function(err, value) {
		i++;

		results.push(value);
		task = tasks[i];

		if (!task || err) {
			callback(err, results);
		}
		else {
			task(next);
		}
	};

	task(next);
}

module.exports = series;
