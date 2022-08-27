// To add a permanent memory to an existing function we have to create a new function that will run the existing function inside of itself.

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

    // function decoration Review:---

    /*
    Function decoration:---

— Easier to add features - We can ’pseudo’ edit our functions that we’ve already made - into functions that behave similar but with bonus features!

— Easier to debug - Definitely need to know how it’s working under the hood!
*/

