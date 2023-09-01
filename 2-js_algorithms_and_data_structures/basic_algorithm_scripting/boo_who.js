/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

/*
function booWho(bool) {
  return bool;
}

booWho(null);
*/

function booWho(bool) {
	return typeof bool === 'boolean' ? true : false;
}

booWho(null);
console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([ 1, 2, 3 ]));
