//currying in javascript

// var add = function(a) {
//     return function(b) {
//         return a + b
//     }
// }

// // var addToFive= add(5);
// // //returning function would essentially be 
// //addToFive ->
// // function(b){
// //     return 5 + b;
// // }
// // and would have a closure inside


// }

// console.log(addToFive(2)) //7

//weird mix of provided ES5 and ES6 -> fixed w/reduce below
// var avg = function(...n){
//     let tot = 0;
//     for(let i = 0; i < n.length; i++) {
//         tot += n[i];
//     }
//     return tot/n.length;
// }

// var spiceUp = function(fn, ...n) {
//     return function(...m) {
//       return  fn.apply(this, n.concat(m));
//     }
// }

var avg = function(...n){
   return (n.reduce((preVal, elem) => (preVal + elem), 0))/n.length
}
console.log(avg(1,2,3));

var spiceUp = function(fn, ...n) {
    return function(...m) {
      console.log(n.concat(m))
      return  fn.apply(this, n.concat(m));
    }
}



var doAvg = spiceUp(avg, 1,2,3); //run avg w/1,2,3 since same 'n' arg
//that 'partial' value is stored in doAvg as it waits for arguments 
//for the inner function which this returns.
console.log(doAvg) // [Function]
console.log(doAvg(4, 5, 6));  //this fills the ...m spread
// -> 3.5