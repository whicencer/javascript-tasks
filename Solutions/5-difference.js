/*

	Creates an array of array values not included in the other given arrays using
	SameValueZero for equality comparisons.
	
	The order and references of result values are determined by the first array.

*/

const { test } = require('../test');


/* Test case */
const cases = [
	[[[2,1], [2,3], [1]], []],
	[[[2,1], [2,3], []], [1]],
	[[[2,1], [2,3]], [1]],
	[[[2,1,4,5,6,7], [2,3], [1,4,5]], [6,7]],
];
/* Test case */

const concat = (...values) => [].concat(...values);

function difference(array, ...values) {
	const result = [];
	const secondArray = concat(...values);

	for (let i = 0; i < array.length; i++) {
		const value = array[i];

		if (!secondArray.includes(value)) {
			result.push(value);
		}
	}

	return result;
}

// Run tests
test(difference, cases);



/* Another solution */

// function difference(array, ...values) {
// 	const secondArray = concat(...values);

// 	return array.filter(value => !secondArray.includes(value));
// }