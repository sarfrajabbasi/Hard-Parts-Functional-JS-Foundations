
// Interlude - arrays, objects and functions have access to ‘methods’:-----

// — ‘methods’ are functions that they can use on themselves

const array = [1,2,3].

array.push(10) // Where’s this push method come from?.

/*
— The ‘methods’ that arrays get are stored in an object that every array has access to when you refer to the array, followed by a ‘dot’ and the method name (See OOP JS Hard Parts).

— The link to this object full of shared methods is on the.
__proto__ property

*/

// JavaScript has a built-in version of reduce available to all arrays.

// Reminder of our version of reduce

var add = (a, b) => a + b
var summed = reduce([1,2,3], add, 0) // summed is 6

// With the built-in version , the array is inserted into the reduce function automatically as the first input/argument. But they produce the same result.

const add = (a, b) => a + b
const summed = [1,2,3].reduce(add, 0) // summed is 6
/*
In fact we get a number of built-in higher order functions
in JavaScript
— map, forEach, filter, flatMap, reduce, reduceRight
— All ‘iterate’ through each element of the array and
run a function on each
— But behave differently - MDN guides us
*/

const array2 = [1,2,3,4,5,6]
const greaterThan2 = num => num > 2
const filteredArray = array.filter(greaterThan2) // [3,4,5,6]