'use strict';

// function getMessage() {
//     const year = new Date().getFullYear();
//     return "The year is " + year;
// }
// console.log(getMessage());


// function getMessage() {
//     return `The year is ${new Date().getFullYear()}`
// }
// console.log(getMessage())

// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`
// }
// console.log(fullName('Chris', 'Ziegler'))

// //fat arrow functions
// const team = {
//     members: ['Jane', 'Bill'],
//     teamName: 'Super Squad',
//     teamSummary: function() {
//         return this.members.map(function(member) {
//             return  `${member} is on team ${this.teamName}`;
//         }.bind(this));
//     }
// }
// console.log(team.teamSummary());
//TypeError: Cannot read property 'teamName' of undefined

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(member => `${member} is on team ${this.teamName}`)
    }
}
console.log(team.teamSummary());
//[ 'Jane is on team Super Squad', 'Bill is on team Super Squad' ]

//fat arrow functions aren't always what you want
// const profile = {
//     name: 'Alex',
//     getName: function(name) {
//         return name = this.name; //return an assignment
//     }
// };

// console.log(profile.getName());

// const profile = {
//     name: 'Alex',
//     getName: (name) => {
//         console.log(this);
//         name = this.name 
//     }
// };

// console.log(profile.getName());
// //{} undefined   So in this case, the value of 'this.name' inside of an arrow function 
// // will be equal to the context surrounding the object, which is presumably 'window' scope 
// // or 'null' or 'undefined'.