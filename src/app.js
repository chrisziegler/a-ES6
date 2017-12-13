// Add some ES6 code to src/app.js
//$npm run js



// function functionalMap(fn, list) {
//    return list.map(fn);
// }
// function partialFunctionalMap(fn) {
//   return function(list) {
//     return functionalMap(fn, list);
//   }
// }
// // Example 1
// // Let's apply all the arguments at once
// functionalMap(x => x * 2, [ 1, 2, 3 ]);
// functionalMap(x => x * 2, [ 2, 3, 5 ]);

function* createHello() {
  try {
    const word = yield
    console.log(`Hello ${word}`)
  } catch (err) {
    console.log('ERROR', err)
  }
}

const hello = createHello()
hello.next()
hello.throw()