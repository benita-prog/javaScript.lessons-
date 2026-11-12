//Functions

// Default parameters

function greet(name = "friend", punctuation = "!") {
  return `Hello, ${name}${punctuation}`;
}

console.log(greet());            // Hello, friend!

console.log(greet("Ada"));       // Hello, Ada!

console.log(greet("Ada", "?"));  // Hello, Ada?


//Function expressions and arrow functions

//Named function
function addNumbers(a, b) {
  return a + b;
}

// Function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// Arrow with an implicit return: no braces, no 'return' word
const addShort = (a, b) => a + b;

// One parameter: brackets optional
const square = n => n * n;

// Returning an object: wrap it in ( ) so it is not read as a code block
const makeUser = name => ({ name: name, active: true });

console.log(add(2, 3), addArrow(2, 3), addShort(2, 3));  // 5 5 5

console.log(square(4));      // 16

console.log(makeUser("Ada")); // { name: 'Ada', active: true }


//scope
const everyone = "global";

function demo() {
  const local = "only inside demo";
  console.log(everyone, local);   // global only inside demo
}

demo();

console.log(typeof local);        // undefined (it does not exist out here)

if (true) {
  let inside = 1;
}

console.log(typeof inside);       // undefined (blocks have scope too)


//Async JavaScript
console.log("1: start");

setTimeout(() => {
  console.log("2: after 1 second");
}, 1000);

console.log("3: end");
// 1: start
// 3: end
// 2: after 1 second   (the timer code ran last, even though it was written second)