// var mul = function(x, y){
//     return x * y
// }

var sum = function(x, y) {
    return x + y
}

var run = function(fn, a, b) {
    console.log(fn(a, b)) 
}

// let mulResult = run(mul, 10, 5)
// let sumResult = run(sum, 10, 5)
// console.log('sum: ' + sumResult + 'product: ' + mulResult )

//or alternately just write the callback function in the function parameters
let result = run(function(x, y){
    return x * y
}, 10, 6);


// document.write('<pre>' + JSON.stringify(total) + '</pre>');

// document.write('<pre>' + JSON.stringify(total) + '</pre>');