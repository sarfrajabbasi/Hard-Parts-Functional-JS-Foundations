// Calling a function inside the function call in which it was defined.

const outer = () => {
let counter = 0;
const incrementCounter = () => {
counter ++;
}
incrementCounter();
}
outer();

// What determines what data your function have access to when you call the function? Where we call it?

// But what if we call our function outside of where it was defined?

const outer2 = () => {
let counter = 0;
const incrementCounter = () => {
counter ++;
}
}
outer();
incrementCounter();
// What happens here?


// There is a way to run a function outside where it was defined

// Without an error - we return the inner function and assign it to a new global label

const outer3 = () => {
let counter = 0;
const incrementCounter = () => {
counter ++;
}
return incrementCounter
}
const newFunction = outer();


// Now we can call the function that was originally saved as incrementCounter by its new global label newFunction

const outer4 = () => {
let counter = 0;
const incrementCounter = () => {
counter ++;
}
return incrementCounter
}
const newFunction1 = outer();
newFunction()
newFunction()
// But we have a problem