const { test, expect } = require('../test');
/*

	You are going to be given an array of integers.

	Your job is to take that array and find an index N where the sum of the
	integers to the left of N is equal to the sum of the integers to the right of N.

	If there is no index that would make this happen, return -1.


	// Examples:
	findEvenIndex([1,100,50,-51,1,1]) ==> 1. Because 50+(-51)+1+1 = 1, and 100 is the number between.
	findEvenIndex([1,2,3,4,3,2,1]) ==> 3. Because 1+2+3 = 3+2+1 = 6, and 4 is the number between

*/



function sum(arr, from, to) {
	return arr.slice(from, to).reduce((a, b) => a + b, 0);
}

function findEvenIndex(arr, startIndex = 0) {
	const leftSum = sum(arr, 0, startIndex);
	const rightSum = sum(arr, startIndex + 1);

	if (leftSum === rightSum) {
		return startIndex;
	} else if (leftSum !== rightSum && startIndex === arr.length) {
		return -1;
	}

	return findEvenIndex(arr, ++startIndex);
}



// Run tests
test('1-findEvenIndex.js', () => {
	expect(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
	expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
});