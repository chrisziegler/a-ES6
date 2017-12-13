// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

const person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname
    }
}

const john = Object.create(person)
console.log(john.greet())
john.firstname = 'John'
console.log(john.greet())
console.log(john.__proto__)
console.log(person.isPrototypeOf(john))
// console.log(john instanceof person) //Error

function Employee(name, position) {
    this.name = name
    this.position = position
}

const jane = new Employee('Jane', 'Bartender')
console.log(jane.position)
console.log(jane instanceof Employee)