'use strict';
//basic prototypal inheritance

// function Car(options) { //pass it an options object
//     this.title = options.title;
// }

// Car.prototype.drive = function() {
//     console.log('vroom');
// }

// function Toyota(options) {
//     this.color = options.color;
//     //whenever we run instantiate a Toyota object
//     //make sure to run any initialization that occurs in theCar, as well
//     Car.call(this, options); 
// }

// //We also want to use Car's drive method from a Toyota
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
// //Now we'd expect to be able to add a method to Toyota's prototype
// Toyota.prototype.honk = function() {
//     console.log('Beep Beep!');
// }

// const toyota = new Toyota({color: 'red', title: 'Daily Driver'})
// console.log(toyota); 
// toyota.drive();
// toyota.honk();

//REFACTORED INTO ES6 CLASSES
class Car {
        //use destructuring to get title property off options object
    constructor({ title }) { //gets run to initialize things whenever we use new keyword on the class
        this.title = title;
    }
    drive() { //enhananced object literal syntax replaces drive: function() {}
        console.log('vroom!')
    }
}

// const car = new Car({ title: 'Toyota' });
// console.log(car);
// car.drive();

//ADDING OUR TOYOTA CLASS - which will inherit from the car class
class Toyota extends Car {
    constructor(options) { // constructor - the one and only method that gets called when we create a new instance
        // same thing as Parent.constructor() - need to pass the parent the options (title to use)
        super(options); // runs the Car constructor too, to give us that initialization and setup of properties
        this.color = options.color;
    }
    honk() {
        console.log('beep beep')
    }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(toyota);
toyota.honk();
toyota.drive(); // method on the parent class








// //js doodle destructuring
// const op = {color: 'red', title: 'Daily Driver'};
// const { color, title } = op;
// console.log(color, title);