// Arrow functions in ES2015

var multiplyBy2 = (input) => { return input*2 }

// So where the function is a single expression to evaluate and then return, ES2015 lets us remove the {} and return keyword

var multiplyBy2 = (input) => input*2

var output = multiplyBy2(3) //6

// We can even remove the parenthesis if there’s only 1 parameter (expected input)

const multiplyBy2 = input => input*2
var output = multiplyBy2(3) //6

/*
Arrow functions fit our our functional programming goals:--

Every line is an independent, labelled piece of code
where we know exactly what data it uses and affects

Therefore a lot of our functions are going to be just

1. Take Input
2. Use the input in some way
3. Return that as the output in the same line.

Arrow functions let us condense our functions to show
this
*/

// Let’s review our use of copyArrayAndManipulate

const copyArrayAndManipulate1 = (array, instructions) => {
const output = [];
for (let i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}
const multiplyBy2 = (input) => {
return input*2
}
const result = copyArrayAndManipulate1([1, 2, 3], multiplyBy2);

// -----------

// Let’s use our shortened version of our callback function multiplyBy2

const copyArrayAndManipulate2 = (array, instructions) => {
const output = [];
for (let i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}
const multiplyBy2 = input => input*2
const result1 = copyArrayAndManipulate2([1, 2, 3], multiplyBy2);

// ------------

// We can even insert our callback function ‘multiplyBy2’
// directly (‘anonymously’)

const copyArrayAndManipulate3= (array, instructions) => {
const output = [];
for (let i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}
const result2 = copyArrayAndManipulate3([1, 2, 3], input => input*2);

//No multiplyBy2 function independently declared/saved