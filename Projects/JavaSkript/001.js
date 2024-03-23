const myCity = {
    city: 'New York',
    cityGreeting: function() {
        console.log('Greetings!!')
        }
    }
    
myCity.cityGreeting()
    
//How to change from JSON to JS and conversly
    
JSON.stringify() {
    "userId": 1,
    "id": 1,
    "title": "Test Title",
    status: {
        completed: false,
        }
}
    
const a = 10
let b = a
b = 30
console.log(a)
console.log(b)
    
const person = {
    name: 'Bobby',
    age: 21
}
    
person.age = 22
person.isAdult = true
console.log(person.age)
console.log(person.isAdult)
    
const person2 = person
person2.age = 26
person2.isAdult = true
console.log(person.age)
console.log(person.isAdult)
    
//First version of the fixing mutation
    
const person = {
    name: "Denver",
    age: 35
}
const person2 = Object.assign({}, person)
person2.age = 25
console.log(person2.age)
console.log(person.age)
    
//Second version of the fixing mutation
    
const person = {
    name: 'John',
    age: 34
}
const person2 = {...person}
person2.name = 'Jessica'
console.log(person2.name)
console.log(person.name)
    
//Third version of the fixing mutation
    
const person3 = {
    name: 'Andy',
    age: 42
}
const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Panda'
console.log(person2.name)
console.log(person.name)
    
//Function. DO NOT DO THIS!
    
let a = 5
let b = 3
    
let c
c = a + b
console.log(c)
    
a = 8
b = 12
    
c = a + b
console.log(c)
    
//Function. DO THIS!
    
let a = 10
let b = 12
    
function sum(a, b) {
    const c = a + b
    console.log(c)
}
    
//with parameters
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
    
//already with arguments
myFn(15,7)
    
//sending values by link
const personOne = {
    name: 'Eddy',
    age: 21
}
function increasePersonAge(person) {
    person.age += 1
    return person
}
increasePersonAge(personOne)
console.log(personOne.age)
    
//Creating a copies of the object
    
const personOne = {
    name: 'Arny',
    age: 24
}
function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}
    
const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)
    
//Callback function
    
function anotherFunction() {
//Action
}
    
function fnWithCallback(callbackFunction) {
    callbackFunction()
}
    
fnWithCallback(anotherFunction)
    
function printMyName() {
    console.log('Avetik')
}
console.log('Start!')
setTimeout(printMyName, 1500)
    
//scope
    
let a //global scope
let b
    
function myFn() {
    let b //local scope
    a = true
    b = 10
    console.log(b)
}
    
myFn()
    
console.log(a)
console.log(b)
    
const a = 5
function myFn() {
    function innerFn() {
        console.log(a)
        }
    innerFn()
}
myFn()
    
//Operators
    
let a,b
    
a = 10
b = a
    
let c = a + b
console.log(c) //20
    
//Unary operators
    
a++
+a
delete Object.a
typeof a
new Object(a)
    
//Binary operators
    
a = 5
a + b
a += b
a === b
a && b
! // returns boolean
&&, || //return one of the following
    
//Miss value
    
false
0
''
undefined
null
    
'Avetik'&& 'Default value'
'Avetik' || 'Default value'
    
a && b && c && d
a|| b || c || d
    
//Operator '...'
    
const button = {
    width: 200,
    text: 'Buy'
}
const redButton = {
    ...button,
    color: 'red',
}
console.table(redButton)
    
const buttonInfo = {
    text: 'Buy'
}
const buttonStyle = {
    color: 'green',
    width: 200,
    height: 300
}
const button = {
    ...buttonInfo,
    ...buttonStyle
}
console.table(button)
    
//Concatenation of the strings
    
//V1
const hello = 'Hello'
const world = 'World'
const greeting = hello + ' ' + world
    
//V2
const hello = 'Hello'
const world = 'World'
const greeting = '${hello} ${world}'
    
const myFunction = function(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
    
myFunction(5, 3)
    
setTimeout(function() {
    console.log('Welcome back!')
    }, 1000)
    
//Arrow function
(a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}
    
//Named arrow function
    
const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}
myFunction(5, 3)
    
setTimeout(() => {
    console.log('Greetings')
    }, 2000)
    
a => {
    //Body of function
}
    
(a, b) => a + b
    
//Value of parameters of default function
    
//First version
function multByFactor(value, multilier = 1) {
    return value * multilier
}
multByFactor(10, 2)
multByFactor(5)
    
//Second version
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
    })
const firstPost = {
    id: 1,
    aurhor: 'Avetik',
}
newPost(firstPost)