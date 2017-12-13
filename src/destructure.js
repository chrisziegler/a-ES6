'use strict';
//Destructuring: The Goldmine of ES6
//ES5 ver
var expense = {
    type: 'Business',
    amount: '$45 USD'
};

//later on we might want to reference the type, and amount on this object:
// var type = expense.type;
// var amount = expense.amount;

//ES6 - Avoid writing duplicate code when possible - DRY
//We've got const twice, expense twice, and amount twice

//Destructuring is all about making assignment easy by reducing duplicate code.

// const { type } = expense;
// const { amount } = expense;
// what the curly braces are saying on the left-hand side of equal sign, is that I want
//to create a declare new variable called 'type', and I want it to reference the expense.type property.
//This can be shortened even more, since we're refencing the same object:
const { type, amount } = expense
console.log(type+':', amount);  //Business: $45

console.log(typeof type);
console.log('---------------------');



//ES5
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

// function fileSummary(file) {
//     return `The file ${file.name}.${file.extension} is of size ${file.size}`;
// }
// console.log(fileSummary(savedFile));

//instead of doing this, put our destructure dot syntax name 
//right in as parameters to the function
// const {extension, name, size} = savedFile;

// function fileSummary({ name, extension, size }) {
//     return `The file ${name}.${extension} is of size ${size}`
// }
// console.log(fileSummary(savedFile));

//note: you could destructure multiple arguments this way
function fileSummary({ name, extension, size }, { color }) {
    return `The ${color} file ${name}.${extension} is of size ${size}`
}

console.log(fileSummary(savedFile, { color: 'red' }));

console.log('---------------------');

//DESTRUCTURING ARRAYS

const companies = [
    'Google',
    'Facebook',
    'Uber'
];
//If destructuring objects is about pulling off properties, destructuring arrays is 
// about pulling off individual elements.

//The rule with destructuring arrays is the order of placement, is the order you pull it from array
const [ name, name2, name3 ] = companies;
//This replaces something like:
// const firstCompany = companies[0];
console.log(name, name2, name3); //Google Facebook Uber
//interestingly, if we used curly braces it is going to try to pull the property
// off the array - we don't have a name property on the array
//but there are properties on the array.prototype such as length
const { length } = companies;
console.log(length); // 3

//SPREAD OPERATOR IN DESTRUCTURING
const [ one, ...rest ] = companies;
console.log(one, rest); // Google [ 'Facebook', 'Uber' ]

console.log('--------------------------')

//DESTRUCTURING ARRAYS OF OBJECTS
const techCompanies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
];
// let's say we wanted to get access to the name of 'Google', in ES5
// let location = techCompanies[0].location;
// console.log(location); 

// IN ES6 DESTRUCTURING
// const [location] = companies;
// [location] reaches into the array for the first element -> { name: 'Google', location: 'Mountain View' },
//But we just want the location PROPERTY off that object
// so we can also destructure at the same time
// const [{ location }] = techCompanies; //!!LIMITED TO THE FIRST ELEMENT USING THIS SHORTCUT
// const [{ location }] = techCompanies[1];
// console.log(location);  // Mpuntain View

// //Another way to assign inner objects to variables
// const [a, b, c ] = techCompanies;
// console.log(b);  // { name: 'Facebook', location: 'Menlo Park' }

// // How to access elements of the array other than the first:
// const { location } = techCompanies[1];



console.log('------------------------');

const Google = {
    locations: ['Mountain View', 'New York', 'London']
};
//Instructor provided shortcut - only gives access to first property
const { locations: [ ,location ] } = Google
console.log(location); // -> New York [ ,,location ] would yield 'London'

//2-step destructuring
// const { locations } = Google; //locations now equals a property on Google
// const [,ny ] = locations; // this property is an array, so we can destructure it
// console.log(ny);








