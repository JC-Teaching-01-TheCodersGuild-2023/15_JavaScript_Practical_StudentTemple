// Class 11 - Intro

// Demo - 1
/*
// Show different conenction methods
// Demostrate how to use liveserver
// How to comment in JS
// Console.log & methods = alert, prompt & confirm (https://www.w3schools.com/jsref/obj_window.asp)
// Devtools in chrome.

// I am a comment

console.log("Hi I am the console");
alert("I am a alert");
prompt("what is your name?");
confirm("I you good today?");
*/

// Demo - 2
/*
// Create the different types of variables
// Show different ways of naming i.e. camel case, pascal case, snake case
// Demostrate Hiosting & Block Scope

var VarVariable = 10; // this pascal
let letVariable = false; // this camel
const const_variable = "Justin"; // this snake

// console.log(VarVariable, letVariable, const_variable);

// VarVariable = 21;
// letVariable = "Heath";
// const_variable = "Smith";

// console.log(VarVariable, letVariable, const_variable);

const func = function () {
  var VarVariable = "var inside function";
  let letVariable = "let inside function";
  console.log("block", VarVariable, letVariable);
};

func();

console.log("global", VarVariable, letVariable);
*/

// Demo - 3
/*
// Talk about primitives and objects https://developer.mozilla.org/en-US/docs/Glossary/Primitive
// Show 'type of' for the data types
// Show how to do Arithmetic
// Show Math method (https://www.w3schools.com/js/js_math.asp)

const varTemp1 = Math.PI
const varTemp2 = 3

console.log(Math.floor(4.9));
*/

// Demo - 4

// Show how to concatenate strings
// Show template literals
// Show string cannot go over multiple lines
// Show string methods i.e. length, toLowerCase, etc.. (https://www.w3schools.com/js/js_string_methods.asp)

// let someWord = "justin";
// let someOtherWord = "heath";
// // let someString = 'Justin
// // Heath'
// let anotherWord = `Justin ${10 * 10}
// Heath`;

// console.log("I'd like to use an apostrophe" + " " + someWord);
// console.log(someOtherWord + " " + someWord);
// console.log(anotherWord);

// Class 12 - Control FLows

// Demo - 1
/*
// Declare - This does nothing
function funExp1() {
    console.log(Date());
}

// Invoke - This uses the function
funExp1();

// Example of function doing something 
// function funExp2() {
//     let tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     console.log(tomorrow);
// }
// funExp2();
*/

// Demo - 2
/*
function funExp3(arg1, arg2) {
    console.log(arg1 * arg2);
}

funExp3(5, 10);
*/

// Demo - 3
/*
let varExp2 = 10; // Global Scope
let varExp3 = 10; // global scope

function funExp5() {
    let varExp3 = 100; // local scope
    console.log(varExp2 * varExp3);
}

funExp5();
console.log(varExp2);
console.log(varExp3);
*/

// Demo - 4
/*
// arrowExp1 = () => {
//     return new Date();
// };
// console.log(arrowExp1());

// Example 2 - Arguments

//  arrowExp2 = (arg1, arg2) => {
//   return arg1 * arg2;
//  };
//  console.log(arrowExp2(5, 10));

// // Example 3 - Show the different shape of arrow functions

//  arrowExp3 = (arg1, arg2) => (
//     arg1 * arg2
//  );
//  console.log(arrowExp3(5, 10));

//  arrowExp4 = (arg1, arg2) => arg1 * arg2;
//  console.log(arrowExp4(5, 10));
*/

// Demo - 5

// Comparison Operators
// console.log(10 < 5);
// console.log(10 > 5);
// console.log(10 <= 5);
// console.log(10 >= 5);

// Equality Opertors
// console.log(10 == "10");
// console.log(10 != "10");
// console.log(10 === "10");
// console.log(10 !== "10");

// Boolean Logic

// Demo - 6

// Logical Operators
// && || !

// if (1 === 1 && 2 === 2) {
//   console.log("this has worked");
// } else {
//   console.log("this has NOT worked");
// }

// truthy or falsy
// falsy = false, 0, -0, '', null, undefined, NaN

// let var1 = "temp";

// if (var1) {
//   console.log("this has worked");
// } else {
//   console.log("this has NOT worked");
// }

// // ternary Operator

// const varTernary = 10;
// console.log(
//   varTernary ? "This is the true result" : "This is the false result"
// );

// Class 14 - Pseudocode Comments

// Demo - 1 - Pseudocode
/*
// *** Fizz Buzz App ***
// --- Problem ---
// Write a program that prints each number from 1-20 on a new line
    // IF multiple of 3, print “Fizz” INSTEAD of the number
    // IF multiple of 5, print “Buzz” INSTEAD of the number
    // ELSE numbers that are multiples of BOTH 3 and 5 print “FizzBuzz” INSTEAD of the number

// --- Solution ---
// Write a program that prints each number from 1-20 on a new line
// The modulus operator (%) returns the division remainder which will be helpful to resolve this task
    // If needed for modulus of 15 || 3 || 5 and else to catch everything else
        // will need to think of the order of the if statements to catch correctly.

// --- Code ---
*/

// Demo - 2 - Arrays - Example actual learning cover in next class
/*
// --------- arrays
console.log([]);
console.log([1,2,3,4]);
console.log([1,'2',true,[]]);

// --------- Zero Based
// const varArray = [1,'2',true,1234]
// console.log(varArray);
// console.log(varArray[0]);
// console.log(varArray.length);
*/

// Demo - 3 - Objects - Example actual learning cover in next class
/*
// --------- Working with objects
const obj1 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 21,
};

console.log(obj1);
console.log(obj1.lastName);
*/

// Demo - 4 - Loops - Example actual learning cover in next class
/*
// ==== basic loop ==== \\
// for (let i = 0; i <= 10; i++) {
//     console.log(`this is i = ${1 + 1}`);
// }

// ==== Iterate through an array ==== \\
// Iterate over Array Loop (Remember to use array length - 1)
// const array1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < array1.length; i++) {
//     console.log(`array position = ${i} contains ${array1[i]}`);
// }
*/

// Demo - 5

// https://jsonplaceholder.typicode.com

// Using Callbacks and Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((r) => r.json())
//   .then((json) => console.log(json));

// Async example
let justin;
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((r) => r.json())
  .then((json) => {
    justin = json;
  });

console.log(justin);
