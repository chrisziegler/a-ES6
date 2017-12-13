// function sayHi() {
//   console.log(`Hi, my name is ${this.firstName}!`);
// }

// const person = {
//   firstName: 'Chris'
// };

// person.sayHi = sayHi;
// person.sayHi();

// foo.bar.person.sayHi();  // person is the receiver
function sayHi() {
  console.log(`Hi, my name is ${this.firstName}!`);
}

const person = {
  firstName: 'Chris',
  lastName: 'Ziegler'
};

sayHi.call(person);

// setTimeout(person.sayHi, 1000);

// setTimeout(function() {
//   person.sayHi();
// });

// setTimeout(person.sayHi.bind(person), 1000);

