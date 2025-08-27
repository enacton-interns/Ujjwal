"use strict";
// Array
let fruits = ["Apple", "Mango", "Banana", "Grapes"];
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits));
fruits[1] = "Watermelon";
console.log(fruits);
fruits.push("Mango"); //add at last
console.log(fruits);
let discardedFruit = fruits.pop(); //remove from end and return it
console.log(discardedFruit);
console.log(fruits);
fruits.unshift("mango"); //add at start
console.log(fruits);
let removedFruit = fruits.shift(); //remove from start and return it
console.log(fruits);
console.log(removedFruit);

// shift and unshift are slower than push and pop because they shift each and every element

for (let fruit of fruits) {
  //for of loop
  console.log(fruit.toUpperCase());
}

// objects

const person = {
  name: "ujjwal",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "Listening music"],
};

console.log(person);
person.gender = "male";
console.log(person);
console.log(person["person hobbies"]);
delete person.age;
console.log(person);
console.log(person.hasOwnProperty("name"));
console.log(Object.keys(person));

for (let key in person) {
  console.log(person[key]);
}

for (let key in person) {
  console.log(`${person[key]}`); // implicitly call .toString()
}

for (let key of Object.keys(person)) {
  console.log(person[key]);
}

// computed key
const key = "obj1key";

person[key] = 5;
console.log(person);

const man = { ...person, nationality: "Indian" }; //spread operator & concatinaton

// destructuring

const {name, gender } = person;
console.log( name, gender);
