const data = [1, 2, 3];
const doubled = data.reduce((acc, value) =>{
    acc.push(value * 2)
    return acc
}, [])

const doubledMapped = data.map(item => item * 2)

console.log(doubled)
console.log(doubledMapped)

const data2 = [1, 2, 3, 4, 5, 6]

var evens = data2.reduce((acc, value) => {
    if (value % 2 === 0) {
        acc.push(value)
    }
    return acc
}, [])
console.log(evens)

const evensFilter = data2.filter(item => item % 2 === 0)
console.log("evens filtered: " + evensFilter)

//compose

const evenDoubled = data2.filter(item => item % 2 ===0)
.map(item => item * 2)

console.log(evenDoubled)