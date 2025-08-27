// Objects

// Object Definations

// 1. using object Literal / object initializer

const person = {
  name: "Anshul",
  age: 22,
  gender: "male",
  DOB: "06/07/2002",
};

// to add more

person.address = "Madhya Pradesh";
console.log(person);
console.log(person.age);
console.log(person["gender"]);

// 2. using new keyword

const employee = new Object();
employee.salary = 5000;
employee.name = "ujjwal";

console.log(employee);

// 3. Object Constructor

function car(model, year, rating) {
  this.model = model;
  this.year = year;
  this.rating = rating;
}

console.log(car); //object blueprint or prototype

const toyota = new car("XUV", 1999, 4.3); // object

console.log(toyota); //object logged

car.prototype.nationality = "indian";

console.log(toyota);
console.log(car);

console.log(Object.getPrototypeOf(toyota)); // to see inherited property
