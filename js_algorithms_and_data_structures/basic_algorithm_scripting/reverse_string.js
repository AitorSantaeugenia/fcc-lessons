/*
Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

/*
function reverseString(str) {
  return str;
}

reverseString("hello");
*/
function reverseString(str) {
	var reverseString = '';
	var i = 0;

	for (i = str.length - 1; i >= 0; i--) {
		//console.log(i);
		reverseString += str[i];
	}
	return reverseString;
}

reverseString('hello');
reverseString('Howdy');
reverseString('Greetings from Earth');
console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));
