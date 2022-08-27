/*
**We could produce a beautiful ‘to do list’ of our code:--

pipe(
getPlayerName,
getFirstName,
properCase,
addUserLabel,
createUserTemplate
)([{name: 'will sentance', score: 3}]);

--> And render to the webpage

**Functional programming techniques - How do we
recombine?:---

--> Combining our functions is going to require a ton of interesting techniques to:

— rejoin these ‘lines’ of code (tiny functions) into full-sized tasks:

— make it easy to reuse these functions all over the place

— ensure that the tiny functions truly are self-contained

--> We’re going to see many of these techniques today

**(1) Higher order functions, (2) Function composition:----

— A lot these atoms of code (tiny functions) will be
reusable

— They’re small enough that they’re tasks like incrementing a number, looping through an array

— We want to write once, use again and again - even
for tasks that are not quite identical - keeping our
code DRY

**(3) Pure functions, Immutability of state:--

--> We cannot have our lines of code rely on any external
data except their explicitly stated inputs

--> It’s especially important when you’re reusing/recombining lots of these little single-step functions in
lots of totally different scenarios - they better be self
contained!

**(4) Closure, (5) Function Decoration (6) Partial application & Currying:---

We will need ways to: 

— Adjust the functions in case they don’t quite fit together as initially saved;

— Give our functions extra features without having to
write a new function from scratch.

**If we can do all that, our code will become:--

— More readable - every line of code has a name that
indicates its goal known as ’declarative’ programming;

— Easier to debug - Each line of code is an individual
unit with clear input and output - no unexpected
consequences of using that line (‘function’);

— Easier to add features - most new things we want do
do are combinations of something we’ve done
elsewhere in our app;

**Our end and beginning:---

--> Functions become reusable, versatile, flexible piece of
code - a series of independent self-contained readable
and predictable steps passing data from one to the next;

--> But it all starts with us being confident with the core
principles of JavaScript

*/