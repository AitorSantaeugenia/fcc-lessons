const arr1 = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ];
let arr2;

arr2 = [ ...arr1 ]; // Change this line

console.log(arr2);

/*
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
apply is cos Math.max would return null, it only reads comma-separated arguments, not an array, that's why we are using apply here
*/
