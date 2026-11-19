// Functions recap
const mainName = "Louis";

function greet(name) {
  let secondaryName = "John";

  if (name === "Louis") {
    return "Hello, " + name + "!";
  }

  console.log("Hello, " + name + "!" + "Logged by " + mainName + secondaryName);
}

function greetName(name = "friend", punctuation = "!") {
  console.log(`Hello, ${name}${punctuation}${mainName}`);
}

greet();
greetName();

const add = function (a, b) {
  return a + b;
};

console.log(add(5, 10));

const addShort = (a, b) => {
  return a + b;
};

console.log(addShort(5, 10));

//Callback functions
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i); // call the function we were given
  }
}

const consoleNumber = (i) => console.log("Call number", i);

repeat(3, consoleNumber);

// Call number 0
// Call number 1
// Call number 2

// Functions that return functions
function makeCounter() {
  let count = 0;
  return () => ++count;
}

const counter = makeCounter();

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3


const other = makeCounter();   // a separate count
console.log(other());          // 1


console.log("1: start");

setTimeout(() => {
  console.log("2: after 1 second");
}, 1000);

console.log("3: end");

// 1: start
// 3: end
// 2: after 1 second   (the timer code ran last, even though it was written second)


function getUser(id, callback) {
  
  setTimeout(() => {
    callback({ id: id, name: "Ada" });
  }, 5000);
}

getUser(1, user => {
  console.log("Got", user.name);   // Got Ada  (after 0.5 seconds)
})

