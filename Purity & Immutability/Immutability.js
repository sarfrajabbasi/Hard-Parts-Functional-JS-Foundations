// Immutability

const array = [1,2,3]
const multiplyBy2 = num => num*2
const result = array.map(multiplyBy2) // [2,4,6]
const newResult = array.map(multiplyBy2) // [2,4,6]
/*
If we want the only consequence of map to be on that line and to achieve
‘referential transparency’ (I can the function call with its output and it’s the
same) - then I need to preserve my data and not manipulate it;

JavaScript passes a reference (‘link back’) to the arr when it’s inserted into the
function map. If we change (‘mutate’) the input array our function is not pure -
it’s unpredictable - I can’t figure out what it does just be reading it and looking
at its output there in that line - undoes all our hard work


Pure functions & immutability:-------

— Easier to add features - Every saved function be safely used in new combinations , confident it won’t break other parts of the app.

— More readable - Every line is ‘complete’ - it’s fully descriptive - exactly what it does is discoverable its name and limited to that input/output.

— Easier to debug - No 1000s of lines of interdependence.noy directly,but global states,global memory,global safe data.which can all depend on each other.

*/