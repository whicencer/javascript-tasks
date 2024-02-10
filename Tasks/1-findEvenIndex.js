/*

	You are going to be given an array of integers.

	Your job is to take that array and find an index N where the sum of the
	integers to the left of N is equal to the sum of the integers to the right of N.

	If there is no index that would make this happen, return -1.


	// Examples:
	findEvenIndex([1,100,50,-51,1,1]) ==> 1. Because 50+(-51)+1+1 = 1, and 100 is the number between.
	findEvenIndex([1,2,3,4,3,2,1]) ==> 3. Because 1+2+3 = 3+2+1 = 6, and 4 is the number between

*/

const { test } = require('../test');

/* Test cases */
const cases = [
	[[[1, 100, 50, -51, 1, 1]], 1],
	[[[1, 2, 3, 4, 3, 2, 1]], 3],
];



function findEvenIndex(arr, startIndex = 0) {
	// Your code here
}


// Run tests
test(findEvenIndex, cases);