// var _ = require('lodash')
// //no const here as we need to assign to dragon w/lodash
// let dragon = (name, size, element) => 
// //    `${name} is a  ${size} dragon that breathes ${element}!`
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!'

// dragon = _.curry(dragon)
// const fluffykinsDragon = dragon('fluffykins')
// const tinyDragon = fluffykinsDragon('tiny')

// console.log(tinyDragon('Lighning'))
// // fluffykins is a tiny dragon that breathes Lighning!

const dragons = [
    { name: 'fluffykins', element: 'lightning' },
    { name: 'noomi', element: 'lightning' },
    { name: 'karo', element: 'fire' },
    { name: 'doomer', element: 'timewarp' }
]

let hasElement =
    (element, obj) => obj.element === element
//filter gets a callback that takes an item
//that item will be checked against this hasElement function
let lightningDragons = dragons.filter(x => hasElement('lightning', x))

//two prior assignments seem to take the place of this for some reason
// let lightningDragons = dragons.filter( x => x.element === 'lightning')
console.log(lightningDragons)

