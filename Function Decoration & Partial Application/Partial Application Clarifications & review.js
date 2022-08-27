/*
*Partial application and currying:---

— In practice we may have to prefill one, two... multiple arguments at different times

— We can convert (‘decorate’) any function to a function that will accept arguments one by one and only run the function in full once it has all the arguments

— This is a more general version of partial application

*Partial application & currying:-------

— Easier to add features - Mismatched arity - no problem! We write a function multiply once and then reuse it for different situations by ‘editing’ its arguments

— More readable - We can use our composition/reduce to list out functions to run one-by-one on our data, even if the functions excepted more than 1 input!

— Easier to debug - Individual units of functionality possible even with 1+ input expected

*Functional programming:---

Every line of code is named (or if not, its so short we can see exactly what it does), is an independent unit that has all of its consequences in that single line

We can then couple up (compose) these single units of code/instructions (functions) up into complex tasks

But with every component of the task independent, recognizable, reusable, versatile and easily debuggable!


*We have to do some feats to wrestle our tiny units of code (functions):------

Combining up functions with multiple inputs from libraries

We’ve seen many of them (higher order functions, reduction/composition, closure, function decoration, partial application and currying). And there are even
more - monads, applicators et al!

*/

// Readable, debuggable and easy to add features:-----

pipe(
getPlayerName,
getFirstName,
properCase,
addUserLabel,
createUserTemplate
)([{name: 'will sentance', score: 3}]);

// But our code is now a set of independent, self contained steps we can wield to solve any problem and become true composers of our code.