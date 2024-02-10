/*

	Creates an array of elements split into groups the length of `size`.
	If array can't be split evenly, the final chunk will be the remaining elements.

*/

const chunk = (arr, size) => {
	const result = [];
	const a = arr.length/size;
	const b = i*size;

	for(let i = 0; i < a; i++) {
		result.push(arr.slice(b, b+size));
	}

	return result;
};

console.log(chunk([1,2,3,4,5,6], 2));