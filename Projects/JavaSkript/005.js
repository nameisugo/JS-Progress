const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
}

//Switch

switch (Something) {
    case A:
        // Action if Something  === A
        break
    case B:
        // Action if Something === B
        break
    default:
        // Default action
}

const month = 2

switch (month) {
    case 12:
        console.log('Dec')
        break
    case 1:
        console.log('Jan')
        break
    case 2:
        console.log('Feb')
        break
    default:
        console.log('Invalid month')
}

// The ternary operator

//condition ? expression 1 : expression 2

//Condition
    //? expression
    //: expression

// Example #1

const value = 47

value
    ? console.log('True Condition')
    : console.log('False Condition')

// Example #2

const value1 = 43
const value2 = 134

value1 && value2
    ? myFunction1(value1, value2)
    : myFunction2()

// Example #3

let value = 11
console.log(value >= 0 ? value : -value) // value

value = -5
const res = value >= 0 ? value : -value
console.log(res) // value


// Cycles

let i = 0
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++

// Without cycles
const myArray = [true, 'abc', 124]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

const myObject = {
    x: 12,
    y: true,
    z: 'abc',
}

console.log(myObject.x)
console.log(myObject.y)
console.log(myObject.z)

// With cycles

// for
// for in
// while
// do while
// for of

// For

for (let i = 0; i < 6; i++) {
    console.log(i)
}
// DO NOT USE IT FOR ARRAY

