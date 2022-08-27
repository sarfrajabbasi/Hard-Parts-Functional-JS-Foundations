// And we can ‘chain’ these higher order functions - pass the output of one as the input of the next.

const array2 = [1,2,3,4,5,6]
const greaterThan22 = num => num > 2
const add = (a, b) => a + b
const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add,0)//18

// — The output of each higher order function (HOF), where it’s an array, has access to all the HOFs (map,filter, reduce) through the prototype chain.

/*
reduce, filter and chaining higher order functions:-------

— Easier to add features - we can reuse filter in a 1000 different filtering scenarios and can chain it up with other functions.
— More readable - array.filter(greaterThan2).reduce(add,0) - more readable than individual steps with explicit loop.

— Easier to debug - As long as we understand what’s happening
under-the-hood.

And reduce is going to enable something even more powerful
*/

/*
Function composition:----

— Chaining with dots relies on JavaScript prototype feature - functions return arrays which have access to all the HOFs (map, filter, reduce);
— I’m passing my output into the next function automatically.

— What if I want to chain functions that just return a
regular output.

— e.g. multiplyBy2, add3, divideBy5
*/


// We could keep track with global variables

const multiplyBy2 = x => x*2
const add3 = x => x+3
const divideBy5 = x => x/5
const initialResult = multiplyBy2(11)
const nextStep = add3(initialResult)
const finalStep = divideBy5(nextStep)
console.log("finalStep", finalStep)

// But that’s risky, people can overwrite.

// Or we can use the fact that JavaScript evaluates every function call before it moves on

const multiplyBy21 = x => x*2
const add31 = x => x+3
const divideBy51 = x => x/5
const result = divideBy5(add3(multiplyBy2(11)))

/*
Now this is pretty unreadable though
(Btw This relies on our functions being ‘referentially transparent’ - we can replace the call to
the function with its return value with no consequences on our app)


We’re combining a function with a value to get a result
then combining that result with another function to get
another result and so on

What’s this remind you of?
*/

// Reduce as the most versatile function in programming

const multiplyBy22 = x => x*2
const add33 = x => x+3
const divideBy55 = x => x/5
const reduce = (array, howToCombine, buildingUp) => {
for (let i = 0; i < array.length; i++){
buildingUp = howToCombine(buildingUp, array[i])
}
return buildingUp
}
const runFunctionOnInput = (input,fn) => {
return fn(input)
}
const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11)