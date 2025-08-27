"use strict";
console.log("hello world");

// variables
var firstName = "Ujjwal";
console.log(firstName);

firstName = "Anshul";
console.log(firstName);

let ujjwal;
ujjwal = 5;

const PI = 3.142;
// ***********************
// Strings are immutable

// string indexing

console.log(firstName.length);
console.log(firstName[firstName.length - 1]);
console.log(firstName.charAt(1));
console.log(firstName.charCodeAt(3));

// string modifying methods

let str = "   EnactOn   ";
console.log(str);
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
const strcopy = str.replace("On", "off"); //case-sensitive
console.log(strcopy);

console.log(str.replaceAll("EnactOn", "Ujjwal"));

// searching methods

console.log(str.indexOf("n"));
console.log(str.lastIndexOf("n"));
console.log(str.includes("na"));
console.log(str.startsWith("E"));
console.log(str.endsWith(""));

// Extracting SubString

let newStr = str.trim().slice(0, 1); //Enact
console.log(newStr);
console.log(str.substring(0, 8));

// String Splitting
console.log(str.split(""));

console.log(str.repeat(2));

console.log(typeof str);
console.log(typeof str); // both are same
console.log(Number("50"));
console.log(str + "-" + firstName);
console.log(`my name is ${firstName}`);

// number datatype
console.log(typeof null); // answer : - Object//null javascript error/bug  it is not changed because it need to change all the frameworks and libraries.

// trick +"19" =number;
let myNumber = Number.MAX_SAFE_INTEGER;
console.log(myNumber);

let num1 = BigInt(45);
let num2 = 45n;

console.log(typeof myNumber);
console.log(typeof num2);
console.log(typeof num1);
console.log(BigInt(myNumber) + num1);

// truthy and falsy values
// falsy:false, "",null,undefined,0
// truthy:true,1,-1 any number

//  && and operator || or operator
