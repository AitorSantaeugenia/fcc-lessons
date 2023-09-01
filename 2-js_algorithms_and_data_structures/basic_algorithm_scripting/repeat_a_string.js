/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge,
 do not use the built-in .repeat() method.
*/

/*
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
*/

function repeatStringNumTimes(str, num) {
	let test = '';
	for (let i = 0; i < num; i++) {
		test += str;
	}

	return test;
}

repeatStringNumTimes('abc', 3);
console.log(repeatStringNumTimes('abc', 3));
console.log(repeatStringNumTimes('*', 3));
console.log(repeatStringNumTimes('abc', -2));

/* Solution 1
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}*/

/* Solution 2
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
*/

/* Solution 3
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
*/
