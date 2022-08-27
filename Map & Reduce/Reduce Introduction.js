/* reduce and reducers:--

 — The most versatile higher order function of all

 — Takes a mental shift to look at problems through the reduce lens

— Can even enable function composition (to come)
*/

// we have already seen 'reduction' in action:-----

const map = (array, instructions) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
    }
    return output;
    }
    const multiplyBy2 = input => input*2
    const result = map([1, 2, 3], multiplyBy2);

    // What is map actually doing? (accumulator, push etc)

/*
We combined/reduced by:-----

— Taking the array [] and combine with array[0] by
pushing, take that combined value and combine with array[1] by pushing and so forth.

How else could we combine and use, combine and use?

How else could we ‘combine and use, combine and use’?:--------

— Take the number 0 and combine with array[0] by adding, take that combined value and combine with array[1] by adding and so forth...

— Take the empty string “ ” and combine with array[0] by appending,
take that combined value and combine with array[1] by appending
and so forth...

We’d want to write our function so that it could handle:-------


— Any ‘accumulator’ (array, string, number).

— Any combining logic/code/functionality (the ‘reducer’).
*/

