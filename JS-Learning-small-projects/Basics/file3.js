console.log(1 + undefined);
// hoisting
console.log(firstchar("ujjwal"));

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else return false;
}
console.log(isEven(14));

function firstchar(anyString) {
  return anyString[0].toUpperCase();
}
console.log(firstchar("ujjwal"));

const arr = [1, 2, 6, 8, 9, 5, 4];
function findTarget(arr, target) {
  for (i of arr) {
    if (i === target) {
      return arr.indexOf(i);
    }
  }
}
console.log(findTarget(arr, 9));

// arrow function
const greet = (name = "Buddy") => `Hello ${name}`;
console.log(greet("Anshul"));
console.log(greet());

function calculate(a, b) {
  function add(a, b) {
    console.log(a + b);
  }
  function mul(a, b) {
    console.log(a * b);
  }
  function subtract(a, b) {
    console.log(a - b);
  }
  add(a, b);
  mul(a, b);
  subtract(a, b);
}
const calculator = calculate(4, 5);


