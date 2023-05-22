// Traditional method of defining functions
function multipyBy2(input) {
  return input * 2;
}
// Now applying arrow functions (ES6)
// Remember functions can be aassigned to a variable because under the hood in Js
// Functions are just first class objects
let multipyBy2_arrow_function = (input) => {
  return input * 2;
};

// Let's keep reducing it
// Js(ES6) says if your function body is just a line
// Then you can ignore the curly braces and the return keyword too
let multipyBy2_arrow_function1 = (input) => input * 2;
