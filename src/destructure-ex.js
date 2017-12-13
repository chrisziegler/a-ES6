'use strict';

// function signup(username, password) {
//     //create new user
// }
// signup('myname', 'mypassword');

//Let's say some time goes by and we decide we need more user properties associated
//with an acocount

// LONG ARGUMENTS LISTS - would no longer have to worry about order of arguments
// with destructuring
function signup(username, password, email, dateOfBirth, city) {
    //create new user
}
//other code
//other code
signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');
//in other words, this order of arguments is confusing when you finally do a function call


function signup({username, password, email, dateOfBirth, city}) {
    //create new user
}
const user = {
    username: 'myname',
    password: '12345',
    email: 'myemail@example.com',
    dateOfBirth: '12/27/1966',
    city: 'Colorado Springs'
}
signup(user)

console.log('---------------------------')

//turn this weird api format (x, y coordinates)
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

// //into this:
// [
//     { x: 4, y: 5 },
//     {x: 10, y: 1 },
//     {x: 0, y: 40 }
// ];

// points.map(pair => {
//     //we could do something like this (to break apart pairs
//     //const x = pair[0];
//     //const y = pair[1]);
//     const [x, y] = pair;
// })
//But rather than do my destructuring on a separate line
//do it in the arguments list:
// let myMap = points.map(([x, y]) => {
//     // need to return an { } object with each iteration
//     return { x: x, y: y}; // here's where we should use object literal syntax
// })
// console.log(myMap); //we're definitely getting there ->
// //[ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]

let myMap = points.map(([x, y]) => {
    return { x, y}; // ES6 object literal syntax
})
console.log(myMap);  //[ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]




console.log('-----------------------')



const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

//refactor this
// function isEngineer(profile) {
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' && department === 'Engineering';
// }

// function isEngineer(profile) {
//  const {title, department} = profile; //remember move these destructures into arguments list
//   return title === 'Engineer' && department === 'Engineering';
// }

//one liner
let isEngineer = ({title, department} = profile) => title === 'Engineer' && department === 'Engineering';
let emp1 = isEngineer(profile);
console.log(emp1);

console.log('----------------------');
/*The 'classes' variable holds an array of arrays, where each array represents a single class 
that a student is enrolled in.  Convert this array of arrays into an array of objects, where 
each object has the keys 'subject', 'time', and 'teacher' and assign the result to 
'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher]

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }] */

// const classes = [
//   [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//   [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//   [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];

// const classesAsObject;


//class challenge change format to array of objects
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];


// const classesAsObject = classes.map(([subject, time, teacher]) => {
//     return {subject, time, teacher}
// })
//ONE LINER
const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher}
});
console.log(classesAsObject)

//experiment with array of arrays:
// const classesAsObject = classes.map(item => {
//     let subject = item[0];
//     let time = item[1];
//     let teacher = item[2];
//     return {subject: subject, time: time, teacher: teacher};

// })
// console.log(classesAsObject);

const numbers = [1, 2, 3];
const [first, ...els] = numbers;
console.log(els); //[2, 3]