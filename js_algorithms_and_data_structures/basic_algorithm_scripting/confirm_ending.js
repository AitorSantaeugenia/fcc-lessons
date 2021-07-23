/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the 
purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

/*
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
*/

function confirmEnding(str, target) {
	return str.slice(str.length - target.length) === target;
	/* I thought it was only one character, after tried to pass the test, I saw it was not 
 if(str[str.length-1] === target){
    return true;
  }
	return false;
 */
}

confirmEnding('Bastian', 'n');
console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('Connor', 'n'));

/* Solution 2
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"))
*/

/*
First we use the slice method copy the string.
In order to get the last characters in str equivalent to the target's length we use the slice method.
The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
For example str.slice(10, 17) would return give me.
In this case we only include one parameter which it will copy everything from the starting index.
We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
Finally we compare the return result of slice to target and check if they have the same characters.
*/

/* Solution 3
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

if a negative number is provided as the first parameter to slice() , 
the offset is taken backwards from the end of the string.
*/
