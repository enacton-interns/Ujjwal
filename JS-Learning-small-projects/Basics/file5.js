// *** Set ***

const mySet = new Set([0, 1, 2, 3]);
mySet.add(5);
mySet.add(4);
console.log(mySet);
console.log(mySet.has(3));
// mySet.delete(0);
// mySet.clear();
console.log(mySet.size); //size is property not method

for (i of mySet) {
  console.log(i * 2);
}

// *** Map ***

const myMap = new Map();
myMap.set("name", "Ujjwal");
myMap.set("name", "Anshul"); // overrides privious value
myMap.set("age", 22);
console.log(myMap);
console.log(myMap.get("age"));
console.log(myMap.size);
// myMap.clear()
console.log(myMap.has("age")); //check for keys in map
// myMap.delete("name");
console.log(myMap);

for (let key of myMap) {
  console.log(key);
}
for (let [key, value] of myMap) {
  console.log(key + ":" + value);
}
console.log(myMap.get("salary")); // by default undefined if not specified in code but in objects we have to do optional chaining

const person = {
  name: "ujjwal",
  gender: "male",
  age: 22,
  salary:null,
};

console.log(person.salary);

const employee = Object.assign(person); //shallow cloning
console.log(employee);
