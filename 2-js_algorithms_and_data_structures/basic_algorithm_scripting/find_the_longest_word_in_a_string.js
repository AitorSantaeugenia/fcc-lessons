/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

/*
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/

function findLongestWordLength(str) {
	let splitString = str.split(' ');
	//return splitString;
	let longestWord = 0;

	for (let i = 0; i < splitString.length; i++) {
		if (longestWord < splitString[i].length) {
			longestWord = splitString[i].length;
		}
		//console.log(splitString[i]);
	}

	return longestWord;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
findLongestWordLength('What is the average airspeed velocity of an unladen swallow');
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWordLength('What is the average airspeed velocity of an unladen swallow'));
