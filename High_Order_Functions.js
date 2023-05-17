const myArray = [1, 2, 3];
// Say we want to make a function that takes in an array and performs some operations on them
// 1. Multiply each value by 2
let copyAndMultiplyBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
};
// 2. Another to Divide each value by 2
let copyAndDivideBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
};
// 3. Another to Add 3 each value by 2
let copyAndAdd2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 2);
  }
  return output;
};

copyAndAdd2(myArray);
copyAndDivideBy2(myArray);
copyAndMultiplyBy2(myArray);

// When we keep doing this we are breaking the basic law of programming that say try as much as possible not repeat yourself.
// So let's try and make our function reusable
let copyAndManipulate = (array, instructions) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
};
// Instruction 1
let multipyBy2 = (input) => {
  return input * 2;
};
// Instruction 2
let divideBy2 = (input) => {
  return input * 2;
};
// Instruction 3
let add2 = (input) => {
  return input + 2;
};
copyAndManipulate(myArray, multipyBy2);
copyAndManipulate(myArray, divideBy2);
copyAndManipulate(myArray, add2);
// This actually makes our function more reusable and We are not breaking DRY (Do not repeat yourself)

// Now let's simplify our function a bit more by using the .forEach array method
// Wanna learn more about array methods? Paste the link below in your browser
// https://www.youtube.com/watch?v=Urwzk6ILvPQ
// Had to change the name of the fxn because functions can't be editted
let copyAndManipulate1 = (array, instructions) => {
  const output = [];
  array.forEach((value) => output.push(instructions(value)));
  return output;
};
/* For every value of the array, perform the instruction() 
  on it and push the returned value to output. Not simpler??*/
  
// Watch the video to learn about other cool array methods such as map,filter.......
