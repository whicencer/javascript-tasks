/* Create a function which compares two dictionaries */

const {test} = require('../test');

/* Test cases */
const cases = [
	[[{a: 1, b: 'hello'}, {a: 1, b: 'hello'}], true],
	[[{a: 1, b: 'hello'}, {a: 1, c: 'hello'}], false],
	[[{a: 1, b: 'hello'}, {a: 1, b: 'hello', c: 1}], false],
	[[{a: 1, b: 'hello', c: false}, {a: 1, b: 'hello', c: false}], true],
	[[{a: 1, b: 'hello'}, {a: 1, b: 'hell'}], false],
	[[{ c: 'hello', a: 1 }, { a: 1, c: 'hello' }], false],
];


function compare(firstDict, secondDict) {
	// Your code here
}

module.exports = { compare };

// Run tests
test(compare, cases);