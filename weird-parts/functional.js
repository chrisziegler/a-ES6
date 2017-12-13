const arr1 = [1, 2, 3]
console.log(arr1)
//sure in ES6 we could just map, but for sake of argument
// const arr2 = arr1.map(item => item * 2)
var arr2 = []
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2)
}
console.log(arr2)

/* The point is, we want to show how by thinking different
thinking funcitonal, we can reduce the amount of code in the long term*/

function mapForEach(arr, fn) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
            )
    }
    return newArr
}

function quadruple(x) {
    return x * 4
}

console.log(mapForEach(arr1, quadruple))


// In this case we want to pass a function to mapForEach that takes 2
//arguments (while we only pass it one in the for-loop)
//we can use bind to curry the first value - the limiter
//so it's always associated with that copy of checkPastLimit
//that's held in the reference for arr3
const checkPastLimit = function(limiter, item) {
    return item > limiter
}

const arr3 = mapForEach(arr1, checkPastLimit.bind(this, 1))
console.log(arr3) // [ false, true, true ]

// //Another way to do this with ES6 default values
// const checkPastLimit = function(item, limiter = 1) {
//     return item > limiter
// }
// const arr3 = mapForEach(arr1, checkPastLimit)
// console.log(arr3) // [ false, true, true ]

//another way to bind limiter - to simplify our function call:
const checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter
    }.bind(this, limiter)
}

const arr4 = mapForEach(arr1, checkPastLimitSimplified(2))
console.log(arr4)