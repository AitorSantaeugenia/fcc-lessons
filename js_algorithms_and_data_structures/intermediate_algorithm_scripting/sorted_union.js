/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
function uniteUnique(...arr) {
	const newArray = [].concat(...arr);
	//return flatArray;

	// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
	return [ ...new Set(newArray) ];
}

uniteUnique([ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ]);

console.log(uniteUnique([ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ]));
console.log(uniteUnique([ 1, 2, 3 ], [ 5, 2, 1 ]));
console.log(uniteUnique([ 1, 2, 3 ], [ 5, 2, 1, 4 ], [ 2, 1 ], [ 6, 7, 8 ]));
