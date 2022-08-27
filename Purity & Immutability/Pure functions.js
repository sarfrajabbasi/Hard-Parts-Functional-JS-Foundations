/*
Pure functions:------

— Functions as tiny units to be combined and run automatically must be highly predictable.

— We rely on using their evaluated result to pass the input to the next unit of code (automatically). Any ‘side effects’ would destroy this.
*/
let num = 10
const add3 = x => {
num++
return x+3
}
add3(7)