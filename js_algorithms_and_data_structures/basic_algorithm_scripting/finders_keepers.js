/*
Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test,
return undefined.
*/

/*
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
*/
function findElement(arr, func) {
	let num = 0;

	for (let i = 0; i < arr.length; i++) {
		num = arr[i];
		if (func(num)) {
			return num;
		}
	}
	return undefined;
}

findElement([ 1, 2, 3, 4 ], (num) => num % 2 === 0);
console.log(findElement([ 1, 2, 3, 4 ], (num) => num % 2 === 0));
console.log(
	findElement([ 1, 3, 5, 8, 9, 10 ], function(num) {
		return num % 2 === 0;
	})
);

/* SOLUTION 1
function findElement(arr, func) {
  return arr.find(func);
}
*/

/* SOLLUTION 2
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
*/

/* SOLUTION 3
function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}
*/
