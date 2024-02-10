const { test, expect } = require('../test');
/*

	Creates an array with all falsey values removed.
	The values false, null, 0, "", undefined, and NaN are falsey.

*/



const compact = (arr) => {
	// Your code
};


// Run tests
test('3-compact.js', () => {
	expect(compact([1, 0, 2, '', false, 3]), [1,2,3]);
	expect(compact([1, 2, 3]), [1,2,3]);
	expect(compact([0, false, '']), []);
	expect(compact(['a', 1, false]), ['a', 1]);
	expect(compact([true, true, false, NaN, undefined, null]), [true, true]);
});