'use strict';
// Say you wanted to create a Pallete that combined different color sets
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

//We could use the concat method that exists on every array...
//to join these into a NEW, single array

// let combinedColors = defaultColors.concat(userFavoriteColors);

//We could do this, but we could also use the spread operator to the same effect:
let combinedColors = [...defaultColors, ...userFavoriteColors]
console.log(combinedColors); //[ 'red', 'green', 'orange', 'yellow' ]
// Note if we did this...
//let combinedColors = [...defaultColors, userFavoriteColors]
//we'd get: [ 'red', 'green', ['orange, 'yellow'] ]

//unlike concat, we're also unlimited in how many values we combine...
const fallColors = ['fire red', 'fall orange']
console.log(['blue', ...fallColors, ...defaultColors, ...userFavoriteColors])
//[ 'blue', 'fire red', 'fall orange', 'red', 'green', 'orange', 'yellow' ]

console.log('------------------')

// create a shopping list that alerts if required items are not included:
function validateShoppingList(...items) { // Rest Operator
    if (items.indexOf('milk') < 0) { // will be -1 if not in list of arguments
        return [ 'milk', ...items ]; // Spread Operator
    }
    return items;
}

let todaysList = validateShoppingList('oranges', 'bread', 'eggs');
console.log(todaysList); // [ 'milk', 'oranges', 'bread', 'eggs' ]

//Use Spread and Rest for this
//Say you needed to rename a method on an object, but needed backwards compatiblility
// for users of the existing name - such as in the case with a libraray
// pretend developers were complaining about the name calculateProduct:
// const MathLibrary = {
//     calculateProduct(a, b) {
//         return a * b;
//     }
// }
// console.log(MathLibrary.calculateProduct(2, 9));
console.log('------------------')
const MathLibrary = {
    calculateProduct(...args) { //rest op
        console.log('Please use the multiply method instead');
        return this.multiply(...args); //'spread op' 
    },
    multiply(a, b) {
        return a * b;
    }
}
console.log(MathLibrary.calculateProduct(2, 9));

//this works, but now we have duplicate methods to maintain, how about instead
//whenever old users call calculateProduct, they get passed on to multiply().

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

let added = product(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(added)