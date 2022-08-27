// Listing out our ‘lines of code’ (functions) by name with each one’s consequence limited to only affect the next ‘line’ (function call/invocation):----

const multiplyBy2 = x => x*2
const add3 = x => x+3
const divideBy5 = x => x/5
const subtract4 = x => x-4

const reduce = (array, howToCombine, buildingUp) => {
    for (let i = 0; i < array.length; i++){
    buildingUp = howToCombine(buildingUp, array[i])
    }
    return buildingUp
    }
const runFunctionOnInput = (input,fn) => { return fn(input) }
const output = reduce([

multiplyBy2,
add3,
divideBy5,
subtract4
],
runFunctionOnInput,
11
)


/*
Function composition:---

— Easier to add features - This is the essential aspect of functional javascript - being able to list of our units of code by name and have them run one by one as independent, self-contained pieces.

— More readable - reduce here is often wrapped in compose to say ‘combine up’ the functions to run our data through them one by one. The style is ‘point free’.

— Easier to debug - I know exactly the line of code my bug is in - it’s got a label!.
*/