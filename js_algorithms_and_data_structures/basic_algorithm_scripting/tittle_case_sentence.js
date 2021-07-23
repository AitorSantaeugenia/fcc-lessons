/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

/*
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
*/

function titleCase(str) {
	return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

/* Solution 1
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}
*/
/* Code Explanation
We are modifying the replaceAt function using prototype to facilitate the use of the program.

Split the string by white spaces, and create a variable to track the updated title.
 Then we use a loop to turn turn the first character of the word to uppercase and 
 the rest to lowercase. by creating concatenated string composed of the whole word 
 in lowercase with the first character replaced by its uppercase.
 */

/* Solution 2
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
*/

/*
Code Explanation
We are making entire string lowercase and then converting it into array.
 Then we are using map function to replace the lowercase character with uppercase.
  Finally, we are returning the string using join method.
*/

/* Solution 3
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
*/

/*
Code Explanation
The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

Lowercase the whole string using str.toLowerCase().
Replace every word’ first character to uppercase using .replace.
Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole 
string, by using the following pattern.
Regex explanation:
Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)
The g modifier searches for other such word pattern in the whole string and replaces them.

This solution works with national symbols and accented letters as illustrated by following examples
international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’
*/
