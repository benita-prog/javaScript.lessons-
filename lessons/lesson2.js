//conditionals

//The code in if runs only when the condition is true. Otherwise the else code runs.

const age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//else if chains
const score = 72;
if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}
// B   (72 is not >= 90, but it is >= 70, so we stop there)


//Comparison operators and logical operators
const boyAge = 25;
const hasId = true;
console.log(boyAge >= 18 && hasId);    // true
console.log(boyAge < 13 || boyAge > 65);  // false
console.log(!hasId);                // false
console.log(5 == "5");   // true   (== converts types first, avoid it)
console.log(5 === "5");  // false  (=== does not convert, always use it)

//The ternary operator
const girlAge = 20;
const ageStatus = girlAge >= 18 ? "adult" : "minor";
console.log(ageStatus); // adult

//Switch statements
// Use switch when one value is compared against many exact options. Each case is checked with
// ===. break stops the switch; without it, execution falls through into the next case. default runs
// when nothing matches.
const day = "Sat";

switch (day) {
  case "Sat":
  case "Sun":              // two cases sharing one result
    console.log("Weekend");
    break;
  case "Mon":
    console.log("Back to work");
    break;
  default:
    console.log("Weekday");
}
// Weekend

// What happens if you forget break:

const n = 1;

switch (n) {
  case 1: console.log("one");
  case 2: console.log("two");
  case 3: console.log("three"); break;
}
// one
// two
// three   (it fell through from case 1)