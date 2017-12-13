//higher order function from funfunfunction - map - unlike filter does not throw objects away b
// but transforms them - new array without mutation

var animals = [
    {name: 'Fluffy', species: 'rabbit'},
    {name: 'Cara', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]


const names = animals.map((animal) => `The name of the animal is ${animal.name}`)
console.log(names)
     


// const names = animals.map((animal) => {
//     console.log(animal.name)
// })
// console.log(animals);

// var animalNames = []
// for (var i = 0, length = animals.length;  i < length; i++ ) {
//     animalNames.push(animals[i].name)
// }
// console.log(animalNames);

//ephasizing how well these simple functions (like filter) compose
//lets break out the callback in a second variable
// var isDog = (animal) => animal.species === 'dog'
// const dogs = animals.filter(isDog)
// console.log(dogs)
