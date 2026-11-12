// LOOPS

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']; 

const numbers = [10, 20, 30, 1, 2, 3, 4, 5];

//for loop
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + 1);
}

//For in loop

const person = { name: "Alice", age: 22, city: "Delhi" };

for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log(person.name);
console.log(person.age);
console.log(person.city);

//for each loop

numbers.forEach(function(num) {
  console.log(num + 1);
});

numbers.map(n => console.log(n + 1));

const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers);

const result = numbers.filter(n => n % 2 === 0).map(n => n * 2);

console.log(result);




