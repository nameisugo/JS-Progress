//Repeat

const myFunction = function (a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

myFunction(5, 3); // 9

//Functional callback
setTimeout(function () {
  console.log("Отложенное сообщение");
}, 1000);

//Arrowed function (always anonymous)
(a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

const myFunction = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

myFunction(5, 3); // 9

//Value of parameters of default function
function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}

multByFactor(10, 2); // 20
multByFactor(5); // 5

//My version
(value, multiplier = 1) => {
  let multByFactor;
  return value * multiplier;
};

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  author: "Avetik",
};

newPost(firstPost);

//Try/Catch
const fnWithError = () => {
  throw new Error("Some error");
};
try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}

console.log("Continue...");

//Instructions
let a;
const b = 5;
if (a>b) {
    console.log('a is bigger');
}

for (let i = 0; i==; i < 5) {
    console.log(i);
}

function myFn(a) {
    console.log(a);
}

const b = true;
let c = 10;

myFn(2+3)
myFn(b)
myFn(c = c + 1)
myFn(c = c + 1);
myFn(let b)

//Array
const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]

//V2
const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

//Object:
const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

console.log(myObject)

//Array
const myArray = [1, 2, 3]

const myArray = [1, 2, 3, 4]
console.log(myArray) // [1, 2, 3, 4]
console.log(myArray.length) // 4

myArray[2] = 'abc'

console.log(myArray) // [1, 2, 'abc', 4]
console.log(myArray[2]) // 'abc'

myArray[4] = true

console.log(myArray) // [1, 2, 'abc', 4, true]
console.log(myArray.length) //5

//Methods
//Push
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.push(4)
console.log(myArray) //[1, 2, 3, 4]
myArray.push(true)
console.log(myArray) // [1, 2, 3, 4, true]

//Pop
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]
myArray.pop()
console.log(myArray) // [1, 2]
const removedElement = myArray.pop()
console.log(myArray) // [1]
console.log(removedElement) // 2

//Unshift

const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]
myArray.unshift(true)
console.log(myArray) // [true, 1, 2, 3]
myArray.unshift('abc')
console.log(myArray) // ['abc', true, 1, 2, 3]

//Shift
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]
myArray.shift()
console.log(myArray) // [2, 3]
const removedElement = myArray.shift()

console.log(myArray) // {3}
console.log(removedElement) // 2


//ForEach
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

myArray.forEach(el => console.log(el * 2))

console.log(myArray) // [1, 2, 3] (Original array is not changed)


//Map
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

const newArray = myArray.map(el => el * 3)

console.log(newArray) // [3, 6, 9]
console.log(myArray) // [1, 2, 3] (Original array is not changed)