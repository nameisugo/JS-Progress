// While

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

let i = 0;

while (i < 5) {
  console.log(i);
}

// Do while

do {
  // block of code, doing every itteration
} while (Function);

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

let i = 10;

do {
  console.log(i);
  i++;
} while (i < 5);

// For in

const myObject = {
  x: 10,
  y: true,
  z: "abc",
};

for (const key in myObject) {
  console.log(key, myObject[key]);
}

// Foreach for object

const myObject = {
  x: 10,
  y: true,
  z: "xyz",
};

Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key]);
});

// For in for arrays

const myArray = [true, 10, "abc", null];

for (const key in myArray) {
  console.log(myArray[key]);
}

// For of

const myString = "Hey";

for (const letter of myString) {
  console.log(letter);
}

const myArray = [true, 10, "abc", null];

for (const element of myArray) {
  console.log(element);
}

// Modules
// ModuleOne.js

const myName = () => {
  console.log("James");
};

export default myName;

// ModuleTwo.js

import printMyName from "./moduleOne.js";
printMyName(); // James

// Rename imports

const one = 1;
const two = "two";

export { one, two };

import { one as oneRenamed, two } from "./moduleOne.js";

console.log(oneRenamed);
console.log(two);
