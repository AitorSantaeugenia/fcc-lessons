/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	//With indexOf we create a variable where to start searching from
	let checkFrom = alphabet.indexOf(str[0]);

	for (let i = 1; i < str.length; i++) {
		if (str[i] !== alphabet[checkFrom + i]) {
			return alphabet[checkFrom + i];
		}
	}
	return undefined;
}

fearNotLetter('abce');

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('abcdefghjklmno'));
console.log(fearNotLetter('stvwx'));
console.log(fearNotLetter('bcdf'));
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
