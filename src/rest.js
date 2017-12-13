'use strict';

// function addNumbers(numbers) {
//     return numbers.reduce((sum, number) => {
//         return sum + number;
//     }, 0);
// }

// let added = addNumbers([1, 2, 3, 4, 5]);
// console.log(added);
//What if we wanted to sum a bunch of numbers, but they weren't in an array
//Say you wanted to pass multiple arguments to addNumbers?

// function addNumbers(a, b, c, d, e) {
//     const numbers = [a, b, c, d, e];
//     return numbers.reduce((sum, number) => {
//         return sum + number;
//     }, 0);
// }

// let added = addNumbers(1, 2, 3, 4, 5);
// console.log(added); //15


////Example - needs to be called w/an array
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

// function unshift(array, ...args) {
//   return [...args].concat(array);
// }

//The purpose of the Rest operator is to capture all the arguments:
function addNumbers(...numbers) {
    //It apparently puts them into an array for you, so below is not needed
    // const numbers = [a, b, c, d, e];
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

let added = addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(added); //45

//More Practical Example (in spread.js_)