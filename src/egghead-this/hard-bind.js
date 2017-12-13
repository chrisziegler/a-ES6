/* eslint-disable */

//Naive hand-rolled version of bind()
// Function.prototype.bind = function(thisArg, ...fixedArgs) {
//   const func = this;
//   return function (...args) {
//     return func.apply(thisArg, [...fixedArgs, ...args]);
//   }
// };

const person = {
  firstName: 'Chris',
  lastName: 'Ziegler',
  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`);
  }
};

// setTimeout(person.sayHi.bind(person), 2500);

const greet = person.sayHi.bind(person);
// greet();

// Once a function has been bound its this argument can no longer be changed
const otherPerson = {
  firstName: 'Jane'
};

greet.call(otherPerson); // Hi, my name is Chris



