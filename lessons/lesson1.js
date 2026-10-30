//Variables and data types

// A variable is a labelled box that holds a value. You name the box, put something in it, and use the
// name later instead of repeating the value.

// Print something

console.log("Hello, world!");

// Declaring variables

let name = "Amara";

let age = 22;

const country = "Canada";

console.log(name);

console.log(age);

console.log(country);


// • let is for values that can change later.

// • const is for values that should never change.


age = 23;               // works

country = "Nigeria";    // TypeError: Assignment to constant variable


// Data types

// String
// Number
// Boolean
// Undefined
// Null


// Use typeof to check the data type of a variable

console.log(typeof name);    // string

// Beginner trap

console.log("5" + "5");  // "55"  (joins text)

console.log(5 + 5);      // 10    (adds numbers)

// Naming rules

// • Start with a letter, _ or $, never a number.

// • No spaces.Use camelCase: firstName, not first name.

// • Pick meaningful names: price beats p