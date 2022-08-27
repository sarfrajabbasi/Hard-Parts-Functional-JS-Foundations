/*
We could generalize our function so that we pass in our specific instruction only when we run the copyArrayAndManipulate function
*/

// this is our higher-order functions
const copyArrayAndManipulate = (array,instructions) =>{
    const output = [];
    for(let i =0;i<array.length;i++){
        output.push(instructions(array[i]));
    }
    return output;
};

// callBack- functions
const multplyBy2 = input =>{
    return input*2;
};

const result = copyArrayAndManipulate([1,2,3],multplyBy2);

/* How was this possible?

Functions in javascript = first class objects

They can co-exist with and can be treated like any other
javascript object

1. assigned to variables and properties of other objects

2. passed as arguments into functions

3. returned as values from functions
 */

// Which is our callback function? Which is our higher order function?
// copyArrayAndManipulate =higher-order functions

// multplyBy2 = callback 

/*
Higher-order functions
Takes in a function or passes out a function
Just a term to describe these functions - any function
that does it we call that - but there's nothing different
about them inherently



Higher order functions:------

— Easier to add features - we don’t need to build a brand
new copyArrayAndAdd3 function - just use copyArrayManipulate with the input of add3. Higher
order functions keep our code DRY

— More readable - copyArrayManipulate(multiplyBy2) - I
know what this is doing more readily than the for loop
style

— Easier to debug - As long as we understand what’s
happening under-the-hood
*/