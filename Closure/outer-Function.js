// Now we can call the function that was originally saved as incrementCounter by its new global label newFunction

const outer = () => {
let counter = 0;
const incrementCounter = () => {
counter ++;
}
return incrementCounter
}
const newFunction = outer();
newFunction()
newFunction()
// But we have a problem

