/*

	Creates an array with all falsey values removed.
	The values false, null, 0, "", undefined, and NaN are falsey.

*/

const { test } = require('../test');


/* Test cases */
const cases = [
	[[[1,0,2,'',false,3]], [1,2,3]],
	[[[1,2,3]], [1,2,3]],
	[[[0,false,'']], []],
	[[['a',1,false]], ['a',1]],
	[[[true,true,false,NaN,undefined,null]], [true,true]]
];
/* Test cases */


const compact = (arr) => {
	// Your code
};


// Run tests
test(compact, cases);