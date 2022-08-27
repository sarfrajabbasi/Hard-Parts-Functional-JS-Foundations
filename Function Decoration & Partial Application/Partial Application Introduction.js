/*
Function composition is powerful but every function needs to behave the same way:-----

— Taking in one input and returning out one output

— What if I have a function I want to use that expects two inputs
   — This is ‘arity mismatch’

— We need to ‘decorate’ our function to prefill one of its inputs

This means creating a new function that calls our multi- argument function - with he argument and the multi-argument function stored conveniently in the backpack
*/