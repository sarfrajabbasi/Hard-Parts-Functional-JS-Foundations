// What happens when javascript executes (runs) my code?

const num = 3;
const multiplyBy2 = (inputNumber) => {
const result = inputNumber*2;
return result;
}
const name = "Will"

/*
Code is saved (defined) in functions - to be run later

**As soon as we start running our code, we create a global execution context:---

— Thread of execution (parsing and executing the code line after line)

— Live memory of variables with data (known as a Global Variable
Environment)
*/


// **--Running/calling/invoking a function

// This is not the same as defining a function

const num2 = 3;
const multiplyBy3 = (inputNumber) => {
const result = inputNumber*2;
return result;
}
const output = multiplyBy3(num);
const newOutput = multiplyBy3(10);

/*
When you execute a function you create a new execution context comprising:

1. The thread of execution (we go through the code in the function line by line)

2. A local memory ('Variable environment') where anything defined in the function is stored
*/