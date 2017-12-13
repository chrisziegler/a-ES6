
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  // return {
  //   first: 'John',
  //   last: 'Roe'
  // };
}

const person = new Person('Jane', 'Doe');
console.log(person);
console.log(person.firstName, person.lastName);

