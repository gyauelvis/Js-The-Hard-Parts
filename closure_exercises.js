// Write a function AddByX that takes in an integer argument and returns aanother function;
// The returned function should should also take in an integer argument and return the sum of the first and second arguments

// Solution
let addByX = (x) => {
  return (input) => {
    return input + x;
  };
};

// Test Cases
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

// Solution
let once = (callback) => {
  let beenCalledBefore = false;
  let answer;
  return (input) => {
    if (beenCalledBefore == false) {
      answer = callback(input);
      beenCalledBefore = true;
    }
    return answer;
  };
};

// Test Cases
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

let after = (number, callback) => {
  let count = 0;
  let answer = "";
  return () => {
    if (count >= number) {
      answer = callback();
    }
    count++;
    return answer;
  };
};

// Test Cases
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => "" is printed
afterCalled(); // => "" is printed
afterCalled(); // => 'hello' is printed

// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

let delay = (callback, waitValue) => {
  return setTimeout(callback, waitValue);
};

// Test Cases
let helloWorld = () => {
  console.log("Hello World");
};
delay(helloWorld, 10000); // Should display "Hello World" after 10seconds

// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

// Solution
let rollCall = (array) => {
  let timesCalled = 0;
  return () => {
    if (timesCalled < array.length) {
      console.log(array[timesCalled]);
      timesCalled++;
    } else {
      console.log("Everyone accounted for");
    }
  };
};

// TestCases
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

// Solution
let saveOutput = (callback, password) => {
  let Obj = {};
  return (input) => {
    if (input == password) {
      return Obj;
    }
    Obj[input] = callback(input);
    return callback(input);
  };
};

// TestCases
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

// Solution
let cycleIterator = (array) => {
  let timesCalled = 0;
  return () => {
    if (timesCalled >= array.length) {
      timesCalled = 0;
    }
    console.log(array[timesCalled]);
    timesCalled++;
  };
};

// Test Cases
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'

// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

// Solution
let defineFirstArg = (callback, arg) => {
  return (arg1) => {
    return callback(arg, arg1);
  };
};

// Test Cases
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.

// Solution
let dateStamp = (callback) => {
  return (...args) => {
    return {
      date: new Date().toDateString(),
      output: callback(...args),
    };
  };
};

// Test Cases
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// Create a function censor that accepts no arguments. Censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).

let censor = () => {
  let setOfArgs = [];
  return (string1, string2) => {
    if (string2) {
      setOfArgs.push({ search: string1, replace: string2 });
      return;
    } else {
      setOfArgs.map((string) => {
        string1 = string1.replace(string.search, string.replace);
      });
      return string1;
    }
  };
};

// Test Cases
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

// Solution
let createSecretHolder = (secret) => {
  let privateVal = secret;
  let rObj = {
    setSecret: (newSecret) => (privateVal = newSecret),
    getSecret: () => privateVal,
  };
  return rObj;
};

// Test Cases
obj = createSecretHolder(5);
obj.getSecret(); // => returns 5
obj.setSecret(2);
obj.getSecret(); // => returns 2

// Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.
// Solution
let callTime = () => {
  let numberOfTimes = 0;
  return () => {
    return ++numberOfTimes;
  };
};

// Test Cases
let numberOfCallTime = callTime();
numberOfCallTime(); // => should log 1
numberOfCallTime(); // => should log 2
numberOfCallTime(); // => should log 3

// Create a function roulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'spin' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'.

// Solution
let roulette = (n) => {
  let times = 1;
  return () => {
    if (n > times) {
      times++;
      return "spin";
    } else if (n == times) {
      times++;
      return "win";
    } else {
      return "pick a number to play again";
    }
  };
};

// Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

// Solution
let average = () => {
  let average = 0,
    lastArgs = [];
  return (arg) => {
    let sum = 0;
    if (arg) {
      lastArgs.push(arg);
      lastArgs.forEach((arg) => (sum += arg));
      average = sum / lastArgs.length;
      return average;
    } else {
      return average;
    }
  };
};

// Test Cases
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.

// Solution
let makeFuncTester = (array) => {
  let trueTest = false;
  return (callback) => {
    array.forEach((subArray) => {
      if (callback(subArray[0]) == subArray[1]) {
        trueTest = true;
      }
    });
    return trueTest;
  };
};

// Test Cases
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.

// Solution
let makeHistory = (limit) => {
  let history = [];
  return (string) => {
    if (string != "undo") {
      if (history.length >= limit) {
        // Replacing the oldest element in history wioth the new string if the limit is reached
        history[0] = string;
      } else {
        history.push(string);
      }
      return `${string} done`;
    } else {
      if (history.length == 0) {
        return `nothing to undo`;
      } else {
        return `${history.pop()} undone`;
      }
    }
  };
};

// Test cases
const myActions = makeHistory(2);
console.log(myActions("jump")); // => should log 'jump done'
console.log(myActions("undo")); // => should log 'jump undone'
console.log(myActions("walk")); // => should log 'walk done'
console.log(myActions("code")); // => should log 'code done'
console.log(myActions("pose")); // => should log 'pose done'
console.log(myActions("undo")); // => should log 'pose undone'
console.log(myActions("undo")); // => should log 'code undone'
console.log(myActions("undo")); // => should log 'nothing to undo'

// Inspect the commented out test cases carefully if you need help to understand these instructions.

// Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
// On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

// On the SECOND invocation of the PLAYER function, it will return either:

// the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
// the string 'bust' if that sum is over 21.

// If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

// the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
// the string 'bust' if the new sum is over 21.

// And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
// You may assume that the given array is long enough to give a 'bust' before running out of numbers.

// BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.

// Solution
let blackjack = (array) => {
  let dealer = (arg1, arg2) => {
    let numberOfCallTimes = 0,
      sum = 0,
      i = 0;
    let player = () => {
      if (numberOfCallTimes == 0) {
        numberOfCallTimes++;
        sum += arg1 + arg2;
        return sum;
      } else if (numberOfCallTimes == 1) {
        sum += array[i];
        if (sum < 21) {
          i++;
          return sum;
        }
        numberOfCallTimes++;
        return "bust";
      } else {
        return "you are done!";
      }
    };
    return player;
  };
  return dealer;
};

// Test Cases
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
