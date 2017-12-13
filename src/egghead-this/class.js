

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.sayHi = this.sayHi.bind(this);
//   }

//   sayHi() {
//     console.log(`Hi, my name is ${this.firstName}!`);
//   }
// }

// const person = new Person('Chris', 'Ziegler');
// person.sayHi();

// const greet = person.sayHi;
// greet();


class Person {
  // class fields - need to figure out the right babel-presets for this to work
  // sayHi = () => {
  //   console.log(`Hi, my name is ${this.firstName}!`);
  // };

  constructor(firstName, lastName) {
    this.sayHi = () => {
      console.log(`Hi, my name is ${this.firstName}!`);
    };
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person('Chris', 'Ziegler');
const greet = person.sayHi;
greet();
