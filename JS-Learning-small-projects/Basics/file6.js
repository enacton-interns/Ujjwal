// methods
var firstname = "Ujjwal";
const person = {
  firstname: "Mohit",
  age: 8,
  about: function (city) {
    console.log(
      `My name is ${this.firstname} and i am ${this.age}old , i lives in ${city}`
    );
  },
};
person.about();
console.log(this); //window object

// call apply bind

const employee = {
  firstname: "Anshul",
  age: 22,
};

// call : it invokes immediately, pass args separately

person.about.call(employee, "surat");

//  apply() — Same as call(), but args as an array

person.about.apply(employee, ["Vadodara"]);

// bind() — Doesn’t call immediately; returns a new function with this fixed
const intro = person.about.bind(employee);
intro("Khandwa");

// Arrow Function

const greet =() => {
  console.log("Hello");
};
greet();
