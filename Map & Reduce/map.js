// Developers tend to call copyArrayAndManipulate,map;

// higher order functions

const map = (array, instructions) => {
const output = [];
for (let i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}
const multiplyBy2 = input => input*2
const result = map([1, 2, 3], multiplyBy2);

// Let’s diagram it in a different way and talk about the purpose of diagramming.