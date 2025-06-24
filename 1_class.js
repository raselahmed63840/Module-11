// "use strict";

// ES6 variables

let number = 10; // 'number' can be changed
const PI = 3.14; // 'PI' cannot be changed

number += 0.01; // This is allowed, since 'number' is declared with let
// console.log("The value of number is: " + number); // Outputs: The value of number is: 10.01

//# Scope
if (true) {
    let x = 10; // 'x' is block-scoped
    // console.log("The value of number is: " + number); // Outputs: The value of number is: 10.01
}

// # hoisting 

// console.log(a)
// var a = 10; 


// sayHello();
// function sayHello() {
//     console.log("Hello, World!");
// }

// greet();
// const greet = () => {
//     console.log("Hello, Arrow Function!");
// };


// # 

// x=  10 ;
// console.log(x); // Outputs: 10

//##  spread operator, Rest operator, and destructuring

const arr1 = [1, 2, 3, 4 ]; 
const arr2 = arr1; // arr2 is a reference to arr1
arr1.push(5); // Modifying arr1 also modifies arr2
console.log(arr2); // Outputs: [1, 2, 3, 4]