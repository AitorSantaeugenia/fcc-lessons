/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
	let newArr = [];

	function flatten(arr) {
		arr.forEach(function(item) {
			//devuelve si es array o no, al hacer lo contrario, pos eso
			if (!Array.isArray(item)) {
				newArr.push(item);
			} else {
				flatten(item);
			}
		});
	}
	flatten(arr);
	return newArr;
}

steamrollArray([ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ]);

console.log(steamrollArray([ [ [ 'a' ] ], [ [ 'b' ] ] ]));
console.log(steamrollArray([ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ]));
console.log(steamrollArray([ 1, [], [ 3, [ [ 4 ] ] ] ]));
console.log(steamrollArray([ 1, {}, [ 3, [ [ 4 ] ] ] ]));
