// objects
// create using object initializers
const person = {
  name: "Ujjwal",
  age: 22,
  gender: "male",
  job: {
    type: "web developer",
    position: "Intern",
  },
};
console.log(person.job.position);

// conditionally creation

let x;
if (true) {
  x = {
    greeting: "hello",
  };
}
console.log(x.greeting);

// using a constructor function

function car(model, year, color, owner) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.owner = owner;
}

const myCar = new car("talon", 1996, "gray", "Ujjwal");
console.log(myCar);
console.log(myCar.model);

// Object.create()

const Animal = {
  type: "terestial",
  display: function () {
    console.log(`${this.type} Animal`);
  },
};

const fish = Object.create(Animal);
console.log(fish);
fish.type = "Aquatic";
console.log(fish);
fish.display();

// *** Object traversing

for (let key in person) {
  console.log(key + ":" + person[key]);
}

Object.keys(person).forEach((element) => {
  console.log(person[element]);
});

Object.getOwnPropertyNames(person).forEach((element)=>(console.log(person[element])));


