// This function is known as reduce - it can handle a remarkable range of tasks.

const reduce = (array,howCombine,buildingUp) =>{
    for(let i =0;i<array.length;i++){
        buildingUp = howCombine(buildingUp,array[i]);
    }
    return buildingUp;
}

const add = (a,b) => a+b;

const summed = reduce([1,2,3],add,0)

// Should be called ‘reduce from 2 things to 1 repeatedly, inside’


