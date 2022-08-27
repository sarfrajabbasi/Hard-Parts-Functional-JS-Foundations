/*
Closure:----

— Most esoteric concept in JavaScript

— Functions are our units to build with but they’re limited - they forget everything each time they finish running - with no global state.

— Imagine if we could give our functions memories

*/

// Reminding ourselves of how functions actually work
const multiplyBy2 = inputNumber => inputNumber*2;
const output = multiplyBy2(7);
const newOutput = multiplyBy2(3);

// No memory of the previous execution - imagine if we could give our functions permanent memories.

// It begins with returning a function from a function