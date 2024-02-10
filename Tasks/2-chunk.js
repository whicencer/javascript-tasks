const { test, expect } = require('../test');
/*

	Creates an array of elements split into groups the length of `size`.
	If array can't be split evenly, the final chunk will be the remaining elements.

	// Examples
	chunk([1,2,3,4,5,6], 2) ==> [[1,2], [3,4], [5,6]]
	chunk([1,2,3,4,5,6], 3) ==> [[1,2,3], [4,5,6]]

*/

const chunk = (arr, size) => {
	// Your code
};

test('2-chunk.js', () => {
	expect(chunk([1, 2, 3, 4, 5, 6], 2), [[1,2], [3,4], [5,6]]);
	expect(chunk([1, 2, 3], 1), [1,2,3]);
	expect(chunk([1, 2, 3, 4, 5, 6], 7), [1,2,3,4,5,6]);
});