/*
Check if an Object has a Property
Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object
 has a specific property? JavaScript provides us with two different ways to do this. One uses the
  hasOwnProperty() method and the other uses the in keyword. If we have an object users with a
   property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
Both of these would return true.
*/

/*
Finish writing the function so that it returns true if the object passed to it contains 
all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));
*/
let users = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function isEveryoneHere(userObj) {
	// Only change code below this line
	if (
		userObj.hasOwnProperty('Alan') &&
		userObj.hasOwnProperty('Jeff') &&
		userObj.hasOwnProperty('Sarah') &&
		userObj.hasOwnProperty('Ryan')
	) {
		return true;
	}
	return false;

	// Only change code above this line
}

console.log(isEveryoneHere(users));

// Another function to use could be
function isEveryoneHereTest(userObj) {
	// Only change code below this line
	return [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ].every((name) => userObj.hasOwnProperty(name));

	// Only change code above this line
}
console.log(isEveryoneHereTest(users));

/*
- Uses an array with all of the names which should be present in the object.
- The every method is used to validate all of names used in conjunction with the hasOwnProperty method result 
in a value of true being returned during each iteration.
- If at least one name is not found using the hasOwnProperty method, the every method returns false.
*/
