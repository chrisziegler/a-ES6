'use strict'

const numbers = [1, 2, 3, 4, 5, 6];

const slice1 = numbers.slice(1, 4);
const slice2 = numbers.slice.call(numbers, 1, 4);
const slice3 = numbers.slice.apply(numbers, [1, 4]);

console.log(slice1);
console.log(slice2);
console.log(slice3);

/* There's a gotcha when using call or apply outside of
'strict' mode, and that is if you set (accidentally or
  otherwise) your thisarg to null or undefined. */


function func() {
  console.log(this === global);
}
// these are all true - false in 'strict' mode
func.call(null);
func.call(undefined);

func.apply(null);
func.apply(undefined);

