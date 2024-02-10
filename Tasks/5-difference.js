/*

	Creates an array of array values not included in the other given arrays using
	SameValueZero for equality comparisons.
	
	The order and references of result values are determined by the first array.


	// Examples
	difference([2,1], [2,3]) ==> [1]

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


function difference(array, ...values) {
	// Your code
}


// Run tests
test(difference, cases);