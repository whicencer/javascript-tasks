/* Create a function which compares two dictionaries */

/* Test cases */
const cases = [
	[[{ a: 1, b: 'hello' }, { a: 1, b: 'hello' }], true],
	[[{ a: 1, b: 'hello' }, { a: 1, c: 'hello' }], false],
	[[{ a: 1, b: 'hello' }, { a: 1, b: 'hello', c: 1 }], false],
	[[{ a: 1, b: 'hello', c: false }, { a: 1, b: 'hello', c: false }], true],
	[[{ a: 1, b: 'hello' }, { a: 1, b: 'hell' }], false],
	[[{ c: 'hello', a: 1 }, { a: 1, c: 'hello' }], false],
];


function compare(firstDict, secondDict) {
	const a = Object.keys(firstDict);
	const b = Object.keys(secondDict);

	if (a.join('') !== b.join('')) return false;

	for (i of a) {
		if (firstDict[i] !== secondDict[i]) return false;
	}

	return true;
}


// Run tests
test(compare, cases);