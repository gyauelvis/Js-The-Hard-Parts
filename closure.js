// CLOSURE

// Anytime a function gets invoked or run, it is allocated a new memory
// And after running, the function together with its data, apart from the returned value
// Gets deleted permanently from the memory
// Closure allows us to allocate a particulary memory/cache to given function such that
// The function does not get deleted after it is done running
// And it all starts from returning a function from a function.

let outer = () => {
  let counter = 0;
  let incrementCounter = () => ++counter;
  return incrementCounter;
};

// Here the generatedFunc keeps the returned value by the the outer() which is also a
// function. Functions are also seen as values in Js with lables/Identifiers
// A Value in Js is anything that can be stored in the memory

const generatedFunc = outer();

// So the incrementCounter() function gets shipped from the outer() without its identifier and
// Its function code is now saved to the generateFunc

let result = generatedFunc();
result = generatedFunc();

// Now when the generatedFunc() is invoked, we expect it to ++counter, but first it doesn't know
// what counter is, so it looks in its local memory and counter was not stored in its local memory
// Remember that after running outer(), it get popped from the CALL STACK and every info it had
// Apart from the value it returned it permanently gone.
// But it turns out during the shipment of the incrementCounter() from the ounter(), it gets shipped with the
// But it turns out during the shipment of the incrementCounter() from the ounter(), it gets shipped with the
// with the values that were made reference to in the incrementCounter() from the local memory of the outer() 
// and saves it in the global memory. And that is the bonus that comes with
// returning a function from a function. And hence when running generatedFunc(), it finds the counter var in the global
// memory attached to the generateFunc code.

// The backpack with data from the Outer() that comes with the incrementCounter() function when it is returned to the generateFunc is called closure. 

// The whole concept of a retaining data from a function after its invocation is closure.
