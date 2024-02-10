/*

	Creates a new array concatenating array with any additional arrays and/or values.

*/

const { test } = require('../test');

/* Test cases */
const array = [1, [2, 3]];
const cases = [
	[/* args */[array, 4, [5, 6, 7, 8, 9], [[10]]], /* expected */[1, [2, 3], 4, 5, 6, 7, 8, 9, [10]]],
	[/* args */[array, 3, 4, 3, [[[[3]]]]], /* expected */[1, [2, 3], 3, 4, 3, [[[3]]]]],
	[/* args */[array, 4], /* expected */[1, [2, 3], 4]],
];
/* Test cases */


const isObject = (value) => typeof value === 'object';

function concat(array, ...values) {
	const result = [...array];

	for (let i = 0; i < values.length; i++) {
		const value = values[i];

		isObject(value) ? result.push(...value) : result.push(value);
	}

	return result;
}



// Run tests
test(concat, cases);