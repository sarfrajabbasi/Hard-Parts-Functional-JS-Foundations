// Or add 3?

const copyArrayAndAdd3 = (array) => {
const output = [];
for (let i = 0; i < array.length; i++) {
output.push(array[i] +3);
}
return output;
}
const myArray = [1,2,3]
const result = copyArrayAndAdd3(myArray);

// What principle are we breaking?
// DRY-principle