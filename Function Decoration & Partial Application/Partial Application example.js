// It’s known as ‘Partial application’

const multiply = (a, b) => a * b
function prefillFunction (fn, prefilledValue){
const inner = (liveInput) => {
const output = fn(liveInput, prefilledValue)
return output
}
return inner
}
const multiplyBy2 = prefillFunction(multiply, 2)
const result = multiplyBy2(5)