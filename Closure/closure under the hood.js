// Let's call (run) our generated function with the input 3;

const functionCreator = () => {
let counter = 0
const add3 = (num) => {
const result = num+3
return result
}
return add3
}
const generatedFunc = functionCreator()
const result = generatedFunc(2) //5