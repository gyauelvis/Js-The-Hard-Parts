// Create a function delayedGreet that console logs welcome after 3 seconds
let delayedGreet = () => {
  setTimeout(() => {
    console.log("Welcome");
  }, 3000);
};
delayedGreet(); // should log "Welcome" after 3 seconds\

// Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
let helloGoodbye = () => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Good bye");
  }, 2000);
};
helloGoodbye();

// Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
let brokenRecord = () => {
  setInterval(() => {
    console.log("hi again");
  }, 1000);
};

// Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

let limitedRepeat = () => {
  let count = 0;
  let hi_every_minute = setInterval(() => {
    console.log("hi for now");
    count++;
    if (count >= 5) {
      clearInterval(hi_every_minute);
    }
  }, 1000);
};
limitedRepeat();

// Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

// everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.
let everyXsecsForYsecs = (func, interval, duration) => {
  let count = 0;
  let id = setInterval(() => {
    func();
    count++;
    if (count >= duration) {
      clearInterval(id);
    }
  }, interval);
};

function theEnd() {
  console.log("This is the end!");
}
everyXsecsForYsecs(theEnd, 20, 20);

// Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

// When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

let delayCounter = (target, wait) => {
  let count = 1;
  return () => {
    let id = setInterval(() => {
      console.log(count);
      if (count >= target) {
        clearInterval(id);
      }
      count++;
    }, wait);
  };
};
// Test Cases
const countLogger = delayCounter(3, 1000);
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

// Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

let promised = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  });
};

// Hint: take a look at the Promise object docs on MDN.

// Challenge 9
// Write a SecondClock class, with two methods: start and reset.​
// start: upon invocation, invokes a callback (this.cb, defined in the constructor) on an argument every second, with the argument to the callback being the current seconds "value".

class SecondClock {}

// In other words, the callback gets invoked every second on the "seconds hand" of the clock. Always start with 1 and don't utilize the seconds value of the current computer clock time.

// The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
// The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
// ...
// The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
// The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
// The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
// etc.
// reset: upon invocation, completely stops the "clock".
// Also resets the time back to the beginning.
// ​
// Hint: look up setInterval and clearInterval.

// Challenge 10
// Write a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.

// Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset.

// For examples of debouncing, check out https://css-tricks.com/debouncing-throttling-explained-examples/

let debounce = (callback) => {
  return (interval) => {
    setTimeout(callback, interval);
  };
};
