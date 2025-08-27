const numbers = [4, 2, 3, 5, 9, 10];

numbers.forEach((i, index) => console.log(`index is ${index} number is ${i}`)); // pass index by default

numbers.map((i) => console.log(i)); // return new array

const oddNumbers = numbers.filter((i) => i % 2 !== 0); // filter out elements that satisfy condition and return new array
console.log(oddNumbers);

// all the above method have index attribute
//destucturing and rest/spread operator
const [first, second, ...rest] = numbers;
console.log(first, rest, second);

// reduce method

const reducedArray = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reducedArray);

const usercart = [
  { productId: 1, productName: "Mobile", price: 12200 },
  { productId: 2, productName: "Laptop", price: 42800 },
  { productId: 3, productName: "Bag", price: 1000 },
];

const totalAmount = usercart.reduce((total, item) => item.price + total, 0);
console.log(totalAmount);

// sort
console.log(numbers);
console.log(numbers.sort());
console.log(numbers);
console.log(numbers.sort((a, b) => a - b));

const lowToHigh = usercart.sort((a, b) => a.price - b.price);

const highToLow = usercart.sort((a, b) => b.price - a.price);

console.log(highToLow);

// find method

const product = usercart.find((user) => user.productId === 3);
console.log(product.productName);

//  every

console.log(numbers.every((num) => num > 1));

// some fill splice

console.log(numbers.some((num) => num == 2));

console.log(numbers.fill(0, 0, 3));

console.log(numbers.splice(0, 3)); // for delete

console.log(numbers.splice(1, 0, 99)); // for insert
 
console.log(numbers.splice(1, 2, 99)); // for insert and remove at same time

console.log(numbers);
