/*
Check For The Presence of an Element With indexOf()
Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece
 of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us
  with another built-in method, indexOf(), that allows us to quickly and easily check for the presence 
  of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the
   position, or index, of that element, or -1 if the element does not exist on the array.

For example:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index 
  at which each element exists).
*/

/*
indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. 
We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the 
function using indexOf() so that it returns true if the passed element exists on the array, and 
false if it does not.

function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

function quickCheck(arr, elem) {
	// Only change code below this line
	return arr.indexOf(elem) >= 0 ? true : false;
	// Only change code above this line
}

console.log(quickCheck([ 'squash', 'onions', 'shallots' ], 'mushrooms'));
