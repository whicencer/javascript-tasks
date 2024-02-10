const { expect, test } = require('../test');
/*

	Creates an array of array values not included in the other given arrays.
	The order and references of result values are determined by the first array.

	// Examples
	difference([2,1], [2,3]) ==> [1]

*/



function difference(array, ...values) {
	// Your code
}

// Run tests
test('5-difference.js', () => {
	expect(difference([2, 1], [2, 3], [1]), []);
	expect(difference([2, 1], [2, 3], []), [1]);
	expect(difference([2, 1], [2, 3]), [1]);
	expect(difference([2, 1, 4, 5, 6, 7], [2, 3], [1, 4, 5]), [6,7]);
});



/* Another solution */

// function difference(array, ...values) {
// 	const secondArray = concat(...values);

// 	return array.filter(value => !secondArray.includes(value));
// }