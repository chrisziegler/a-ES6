function Person(firstName, lastName) {
  'use strict';
  this.firstName = firstName;
  this.lastName = lastName;
}

// const person = Person("Jane", "Doe");
// console.log(person);

const person = new Person("Jane", "Doe");
console.log(person);
console.log('------------');
console.log('person.constructor is ' + person.constructor);

console.log(person.__proto__);  // Person {}

