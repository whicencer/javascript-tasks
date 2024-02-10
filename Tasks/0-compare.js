const { test, expect } = require('../test');
/* Create a function which compares two dictionaries */


function compare(firstDict, secondDict) {
	// Your code
}


// Run tests
test('0-compare.js', () => {
	expect(compare({ a: 1, b: 'hello' }, { a: 1, b: 'hello' }), true);
	expect(compare({ a: 1, b: 'hello' }, { a: 1, c: 'hello' }), false);
	expect(compare({ a: 1, b: 'hello' }, { a: 1, b: 'hello', c: 1 }), false);
	expect(compare({ a: 1, b: 'hello', c: false }, { a: 1, b: 'hello', c: false }), true);
	expect(compare({ a: 1, b: 'hello' }, { a: 1, b: 'hell' }), false);
	expect(compare({ c: 'hello', a: 1 }, { a: 1, c: 'hello' }), false);
});