/*
In fact we get a number of built-in higher order functions in JavaScript:---

— map, forEach, filter, flatMap, reduce, reduceRight.

— All ‘iterate’ through each element of the array and run a function on each.

— But behave differently - MDN guides us.
*/

const array = [1,2,3,4,5,6];

const greaterThan2 = num => num > 2;

const filteredArray = array.filter(greaterThan2) // [3,4,5,6]

// And we can ‘chain’ these higher order functions - pass the output of one as the input of the next.

const array2 = [1,2,3,4,5,6]
const greaterThan22 = num => num > 2
const add = (a, b) => a + b
const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add,0)//18

// — The output of each higher order function (HOF), where it’s an array, has access to all the HOFs (map,filter, reduce) through the prototype chain.
