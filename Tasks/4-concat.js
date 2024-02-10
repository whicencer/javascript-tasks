/*

	Creates a new array concatenating array with any additional arrays and/or values.

	// Examples
	concat([1], 2, [3], [[4]]) ==> [1, 2, 3, [4]]
	concat([1, [2,3]], 4) ==> [1, [2,3], 4]

*/

const { test } = require('../test');

/* Test cases */
const array = [1, [2, 3]];
const cases = [
	[/* args */[array, 4, [5,6,7,8,9], [[10]]], /* expected */[1, [2, 3], 4, 5, 6, 7, 8, 9, [10]]],
	[/* args */[array, 3,4,3,[[[[3]]]]], /* expected */[1, [2, 3], 3, 4, 3, [[[3]]]]],
	[/* args */[array, 4], /* expected */[1, [2, 3], 4]],
];
/* Test cases */



function concat(array, ...values) {
	// Your code
}



// Run tests
test(concat, cases);