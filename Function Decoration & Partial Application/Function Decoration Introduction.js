/*
Functional Decoration:----

— Now we can convert functions more easily to make
them suit our task

— Without writing a new function from scratch

— We can run code on other bits of code to appear to change them
*/

// To add a permanent memory to an existing function we have to create a new function that will run the existing function inside of itself

const oncify = (convertMe) => {
let counter = 0
const inner = (input) => {
if (counter === 0){
const output = convertMe(input)
counter++
return output
}
return "Sorry"
}
return inner
}
const multiplyBy2 = num => num*2
const oncifiedMultiplyBy2 = oncify(multiplyBy2)
oncifiedMultiplyBy2(10) // 20
oncifiedMultiplyBy2(7) // Sorry