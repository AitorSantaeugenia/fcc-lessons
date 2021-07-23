/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

/*
function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/

function truncateString(str, num) {
	//let text = 0;

	//I did this cos I thought that they were giving us a string where we needed to convert it to a number, then I realized they gave us a string.length LOL TLDR.
	/*if(isNaN(num)){
   text =  num.length-1;
   str = str.substr(0, text);
  }*/
	if (str.length === num || num > str.length) {
		str = str.substr(0, num);
		return str;
	}
	str = str.substr(0, num);
	return (str += '...');
	//str.substr(1, 2))
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
console.log(
	truncateString(
		'A-tisket a-tasket A green and yellow basket',
		'A-tisket a-tasket A green and yellow basket'.length + 2
	)
);
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));
console.log(
	truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)
);

/* Solution 1
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
*/

/* Solution 2
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
*/
