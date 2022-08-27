// The bond:---

// When a function is defined, it gets a bond to the surrounding Local Memory (“Variable Environment”) in which it has been defined

const outer = () => {
let counter = 0;
const incrementCounter = () => {
counter ++;
}
return incrementCounter
}
const newFunction = outer();
newFunction()
newFunction()


/*
The ‘Backpack’:---

1. When incrementCounter is defined, it gets a bond to the surrounding Local
Memory of live data in outer in which it has been defined
2. We then return incrementCounter out of outer into global and store it in
myNewFunction
3. BUT we maintain the bond to the surrounding live local memory from inside of outer
- this live memory gets ‘returned out’ attached to the incrementCounter function
definition and is therefore now stored attached to myNewFunction - even though
outer’s execution context is long gone
4. When we run myNewFunction in the global execution context, it will first look in its
own local memory for any data it needs (as we’d expect), but then in its ‘backpack’
before it looks in global memory
What’s the official name for the ‘backpack’?



The Closed over Variable Environment (COVE) or ‘Closure’:---

This ‘backpack’ of live data that gets returned out with incrementCounter is known as the ‘closure’.
The ‘backpack’ (or ‘closure’) of live data is attached incrementCounter (then to myNewFunction) through a hidden property known as [[scope]] which persists when the inner function is returned out.

Closure in functional JavaScript:-----

— Easier to add features - Our functions can now have persistent permanent memories attached to them - it’s going to let us build dramatically more powerful functions.

— Easier to debug - Definitely need to know how it’s working under the hood!

*/