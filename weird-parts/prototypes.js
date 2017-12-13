
var _ = require('underscore');
const person = {
    firstname: 'default',
    lastname: 'default',
    getFullName() {
        return this.firstname + ' ' + this.lastname
    }
}

const john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER!! for demo purposes only!
// becasue modern browsers do provide a way to directly access 
// the prototype. It is typed __proto__ to make it hard to use accidently
john.__proto__ = person;
//john now inherits person, and all it's methods, if the methods aren't
// on person, the js engine will look on person's prototype
console.log(john.getFullName()) // John Doe
console.log(john.firstname) //John 
//becasue of the prototype chain, the firstname on john hides
//that property on the prototype
const jane = {
    firstname: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName()) // Jane defaul

//look at in DevConsole while running index.html on a server
var a = {};
var b = function() { };
var c = [];
//now if we run this in console we have access to a, b, and c in the memory
/*
a; --> Object {} [base object] everything evenutally leads to the base object
look at what's on the base object - NNED THE DOT AT THE END
a.__proto__.  --> long list in an intelliSense pulldown: constructor, hasOwnProperty, Getters, Setters, etc
remember b is a function, on it we have some familiar built-in methods:
b.__proto__.  --> bind, call, apply, etc
all these are on the very bottom of the prototype chain
c is an array:
c.proto__.  --> map, reduce, filter, forEach, push, pop, ton of built-ins updated for ES6
*/
for (let prop in john) {
    if (john.hasOwnProperty(prop)) {
         console.log(prop + ': ' + john[prop])
    }
   
}
console.log(john.hasOwnProperty('firstname')) //true
console.log(john.hasOwnProperty('getFullName')) //false

const susan = {
    address: '1212 Lovers Ln',
    getFullName() {
        return this.lastname + ' ' + this.firstname
    }
}
const jim = {
    getFirstName() {
        return firstname
    }
}
//in underscore
_.extend(john, susan, jim)
console.log(john)