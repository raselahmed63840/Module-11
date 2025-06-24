// // 

// let number = 100;// 
// // This is a simple JavaScript program that defines a variable and logs it to the console.
// const PI = 3.14; // Define a constant for Pi

// number += 10;
// console.log("The value of number is: " + number); // Log the value of number

// x = 10;
// console.log("x); // Log the value of x
// console.log("The value of Pi is: " + PI); // Log the value of Pi


// const arr1 = [1, 2, 3, 4]; // Define an array
// const arr2 = [...arr1, 10, 40]; // Create a new array with the spread operator
// arr1.push(5); // Modify the array by adding an element
// console.log(arr2); // Log the value of arr1

// function sum(values) {
//     console.log(values);
//      const result = values.reduce((acc, num) => acc + num, 0); // Calculate the sum of the array elements
//     console.log("The sum is: " + result); // Log the result
// }

//  sum(100, 4, 5, 6); // Call the sum function with an array of numbers

// const numbers = [100, 4, 5, 6]; // Define an array of numbers
// const [a, , c, d] = numbers; // Destructure the array into variables

// console.log("The value of a is: " + a,c); // Log the value of a

// # ES6 Functions 

// const greet = (name) => {
//     console.log(`Hello, ${name}!`); // Log a greeting message
// }
// greet("Alice"); // Call the greet function with a name

// const add = (a, b) => a + b; // Define an arrow function to add two numbers

// console.log("The sum of 5 and 10 is: " + add(5, 10)); // Log the result of the add function


// const square = (x) => x * x; // Define an arrow function to square a number
// console.log("The square of 5 is: " + square(5)); // Log the result of the square function
// const numbers = [1, 2, 3, 4, 5]; // Define an array of numbers


// ## Object 

// const name = 'john';
// const age = 30;
// const person = {
//     name: name,
//     age: age,
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // Log a greeting message
//     }
// };

// 

// Object methods

// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     getInfo() {
//         return `Car brand: ${this.brand}, Model: ${this.model}`; // Return car information
//     }
// };

//     console.log(car.getInfo()); // Log the car information

//  ## Loop

// for (let i = 0; i < 5; i++) {
//     console.log("Iteration: " + i); // Log the current iteration
// }

// const numbers = [1, 2, 3, 4, 5]; // Define an array of numbers
// for (let i = 0; i < numbers.length; i++) {
//     console.log("Number at index " + i + ": " + numbers[i]); // Log the number at the current index
// }
//    for (const number of numbers) {
//     console.log("Number: " + number); // Log each number in the array
//   }


// const personInfo = { firstName: 'John', lastName: 'Doe', age: 30 }; // Define an object with person information
// for (const key in personInfo) {
//     if (Object.hasOwnProperty.call(personInfo, key)) {
//         console.log(`${key}: ${personInfo[key]}`); // Log each key-value pair in the object
//     }
// }

// ##  Ternary Operator

// let age = 16; // Define a variable for age
// let canVote = (age >= 18) ? "You can vote." : "You cannot vote."; // Use a ternary operator to check voting eligibility
// console.log(canVote); // Log the result of the ternary operation

// ##  ES6 Map 

// const user = new Map(); // Create a new Map object
// user.set(1, 'John'); // Set a key-value pair in the Map
// user.set(2, 'Jane'); // Set another key-value pair in the Map
// console.log(user.get(1)); // Log the value associated with key 1

// console.log(user.has(2)); // Check if the Map contains key 2
// user.delete(1); // Delete the key-value pair with key 1
// console.log(user.has(1)); // Check if the Map still contains key 1


// const userArray = Array.from(user); // Convert the Map to an array
// console.log(userArray); // Log the array representation of the Map


// ## ES6 Set

// const numberArr = [1, 2, 3, 4, 5, 1, 2, 3]; // Define an array with duplicate values
// console.log("Original Array: " + numberArr); // Log the original array

const numberSet = new Set([1, 2, 3, 4, 5, 1, 2, 3]); // Create a new Set from the array
console.log("Set: " + numberSet); // Log the Set, which removes duplicates
numberSet.add(6); // Add a new value to the Set
console.log("Set after adding 6: " + numberSet); // Log the Set after adding a new value
console.log("Does the Set contain 3? " + numberSet.has(3)); // Check if the Set contains a specific value
numberSet.delete(2); // Remove a value from the Set
console.log(numberSet); // Log the Set after deletion

// for ( let number of numberSet) {
//     console.log("Number in Set: " + number); // Log each number in the Set
// }

const valueSet = new Set(1, 2, 3, 4, 5); // Create a new Set with values
const uniqueValues = [...valueSet]; // Convert the Set to an array
console.log("Unique Values: " + uniqueValues); // Log the array of unique values

