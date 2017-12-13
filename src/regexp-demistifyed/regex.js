// console.log(/a/.test('abc')); // true
// console.log(/a/.test('bcd')); // false

let e = /a/;
console.log(e.test('abc')); // true
console.log(e.test('bcd')); // false

console.log(/^a/.test("abc")); //true 
console.log(/^a/.test("bca")); //false 

e =/^[0-9]$/ 
e.test("42"); //false
e =/^\d+$/; 
console.log(e.test("467674335"));
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
