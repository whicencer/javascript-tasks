const { test, expect } = require('../test');
/*

	Creates a new array concatenating array with any additional arrays and/or values.

	// Examples
	concat([1], 2, [3], [[4]]) ==> [1, 2, 3, [4]]
	concat([1, [2,3]], 4) ==> [1, [2,3], 4]

*/


function concat(array, ...values) {
	// Your code
}



// Run tests
const array = [1, [2, 3]];
test('4-concat.js', () => {
	expect(concat(array, 4, [5, 6, 7, 8, 9], [[10]]), [1, [2, 3], 4, 5, 6, 7, 8, 9, [10]]);
	expect(concat(array, 3, 4, 3, [[[[3]]]]), [1, [2, 3], 3, 4, 3, [[[3]]]]);
	expect(concat(array, 4), [1, [2, 3], 4]);
});