// Function declaration
function addFunction(a, b) {
    return a + b;
}
console.log(addFunction(1, 2));  // Outputs: 3

// Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(1, 2));  // Outputs: 3

// This arrow function returns the square of a number
const square = x => x * x;
console.log(square(5));  // Outputs: 25

const toUpperCase = arr => arr.map(word => word.toUpperCase());
console.log(toUpperCase(['hello', 'world']));  // Outputs: ['HELLO', 'WORLD']

const isEven = num => num % 2 === 0;
console.log(isEven(4));  // Outputs: true
console.log(isEven(7));  // Outputs: false
