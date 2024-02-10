const { test, expect } = require('../test');
/* Create a function which compares two dictionaries */


function compare(firstDict, secondDict) {
	const a = Object.keys(firstDict);
	const b = Object.keys(secondDict);

	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		const aItem = a[i];
		const bItem = b[i];

		if (aItem !== bItem) return false;
		if (firstDict[aItem] !== secondDict[bItem]) return false;
	}

	return true;
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