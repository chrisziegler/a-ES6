'use strict';


// const person = {
//   firstName: 'David',
//   lastName: 'Walsh',
//   age: 38
//   // ...
// };


// Object.keys outputs an array - so you can use forEach on it
// Object.keys(person).forEach(function(trait) {
//   console.log('Person ', trait,': ', person[trait]);
// });

// const arr = Object.keys(person);

//traditional method with hasOwnProperty check
// const person = {
//   firstName: 'David',
//   lastName: 'Walsh',
//   age: 38
//   // ...
// };
// function showObject(obj) {
//   let result = "";
//   for (var p in obj) {
//     if( obj.hasOwnProperty(p) ) {
//       result += p + " , " + obj[p] + "\n";
//     } 
//   }              
//   return result;
// }

// let personOwnProps = showObject(person);
// console.log(personOwnProps)

// arrObj.forEach(function(item){ //iterates over 3 items in array
//     let innerObj = Object.keys(item); // note ObjKeys returns an ARRAY
//     console.log(innerObj);
// })
// λ node objkeys.js
// [ 'firstName', 'lastName', 'age' ]
// [ 'firstName', 'lastName', 'age' ]

//array of objects form
// const arrObj = [
//     {firstName: 'Chris', lastName: 'Ziegler', age: 50},
//     {firstName: 'Joe', lastName: 'Dirt', age: 70},
//     //...
// ]

// let myMap = arrObj.map(item => {
//     return `${item.firstName}  ${item.lastName}  ${item.age}`;
// })
// console.log(myMap);
// //[ 'Chris  Ziegler  50', 'Joe  Dirt  70' ]

// const person = {
//   firstName: 'David',
//   lastName: 'Walsh',
//   age: 38
//   // ...
// };

// console.log(Object.entries(person));

// var obj = { foo: 'bar', baz: 42 };
// var key = Object.keys(obj)[1];
// console.log(key);  // 'baz'

// //Find challenge from Udemy ES6 answer provided
//     function findWhere(array, criteria) {
//      var key = Object.keys(criteria)[0];
//       return array.find(function(arr) {
//          return  arr[key] === criteria[key];
//       });
//     }
var ladders = [
   {id: 1, height: 20},
   {id: 3, height: 25},
   {id: 5, height: 45}
];

// var ladObj = {id: 3, height: 25};
// var key = Object.keys(ladObj)[1];
// console.log(key); // height

function findWhere(array, criteria) {
    let key = Object.keys(criteria)[0]; //stores the key of the 2nd argument 'height' - which is an object
    return array.find(arr => arr[key] === criteria[key])
             // same as arr.height === criteria.height
}


let twentyFiveFoot = findWhere(ladders, {height: 25}); // result: {id:3, height: 25}
console.log(twentyFiveFoot);




// //testing map w/template strings
// let medLad = ladders.map(ladder => {
//     let id = ladder.id;
//     let height = ladder.height;
//     return `id = ${id} and height = ${height}`;
//     });
// console.log(medLad);


//ES5 example
var building = {
   id: 1, height: 20, material: 'steel', zoning: true
};
function showObject(obj) {
  var result = "";
  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      result += p + " , " + obj[p] + "\n";
    } 
  }              
  return result;
}
let objOwnProps = showObject(building);
console.log(objOwnProps)

// console logging:
// id , 1
// height , 20
// material , steel
// zoning , true