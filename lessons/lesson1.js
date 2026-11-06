//Variables and data types

// A variable is a labelled box that holds a value. You name the box, put something in it, and use the
// name later instead of repeating the value.

// Print something

console.log("Hello, world!");

// Declaring variables

var userName = "@louis"

var userName = "@name";

// console.log(userName);  // @name

let name = "Amara";

let age = 22;

let ageNext = "22"

const country = "Canada";


// console.log(name);

// console.log(age);

// console.log(country);


// • let is for values that can change later.

// • const is for values that should never change.


age = 23;               // works

const country2 = "Nigeria";    // TypeError: Assignment to constant variable


// Data types

// String
// Number
// Boolean
// Undefined
// Null


// Use typeof to check the data type of a variable

console.log(typeof name);    // string

// Beginner trap

// console.log("5" + "5");  // "55"  (joins text)

// console.log(5 + 5);      // 10    (adds numbers)

let learning = true;

let notLearning = false;

let time = null;

console.log(time);

// Naming rules

// • Start with a letter, _ or $, never a number.

// • No spaces.Use camelCase: firstName, not first name.

// • Pick meaningful names: price beats p


let firstObj = {
    name: "Amara",
    age: 22,
    country: "Canada"
}

console.log(firstObj.name);  // Amara


let firstArray = ["Amara", 22, "Canada", true]

console.log(firstArray[0]);  // Amara

const results = document.querySelector("#product-results");

console.log(results);

function greetUser(name) {
    return "Hello, " + name + "!";  
};

console.log(greetUser("Louis"));
console.log(greetUser("Benita"));
console.log(greetUser("Michael"));
console.log(greetUser("Prince"));
console.log(greetUser("Adam"));






// const greeting = (name) => "Hello, " + name + "!";