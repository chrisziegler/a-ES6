// //higher order function from funfunfunction

// var animals = [
//     {name: 'Fluffy', species: 'rabbit'},
//     {name: 'Cara', species: 'dog'},
//     {name: 'Hamilton', species: 'dog'},
//     {name: 'Harold', species: 'fish'},
//     {name: 'Ursula', species: 'cat'},
//     {name: 'Jimmy', species: 'fish'}
// ]

// // var dogs = []
// // for (var i = 0; i < animals.length; i++) {
// //     if (animals[i].species === 'dog') {
// //         dogs.push(animals[i])
// //     }
// // }

// // console.log(dogs)

// //refactored with filter (declaritive vs. imperative)
// // var dogs = animals.filter(function(animal) {
// //     return animal.species === 'dog'
// // })
// // console.log(dogs)

// //same thing ES2015
// const dogs = animals.filter((animal) => animal.species === 'dog')
// console.log(dogs)

// //ephasizing how well these simple functions (like filter) compose
// //lets break out the callback in a second variable
// // var isDog = (animal) => animal.species === 'dog'
// // const dogs = animals.filter(isDog)
// // console.log(dogs)


String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit
}

console.log("John".isLengthGreaterThan(3))

Number.prototype.isPositive = function() {
    return this > 0
}

//while js will convert a string automatically it won't do that 
//for a number
var a = new Number(3)
console.log(a.isPositive())

const myArr = ['John', 'Jane', 'Jim']

for (let prop in myArr) {
    console.log(prop + ' : ' + myArr[prop])
}

Array.prototype.myCustomFeature = 'cool!'
for (let prop in myArr) {
    console.log(prop + ' : ' + myArr[prop])
}


console.log('---------------------------------')
var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log('null: ' + typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);

