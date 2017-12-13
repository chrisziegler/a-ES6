// const numbers = [1, 11, 111, 1111];

// const arrObj = [
//     {id: 1, total: 20},
//     {id: 2, total: 30},
//     {id: 3, total: 50}
// ];

//Old school for-loop
// const length = numbers.length;
// let sum = 0;
// for (var i = 0; i < length; i++) {
//     sum += numbers[i];
// }
// console.log('for-loop:', sum);

// const summed = numbers.reduce((sum, number) => {
// return sum + number;
// }, 0)
// console.log('arr: ', summed); 

// // figured out how to do this with a one-liner arrow function
// // passing the value to the first parameter where ES^ default parameters don't work
// const summed2 = arrObj.reduce((sum, number) => sum + number.total, 0);
// console.log('arrObj: ', summed2)

//using reduce to produce a map-style array:
// var primaryColors = [
//     {color: 'red'},
//     {color: 'yellow'},
//     {color: 'green'}
// ]

// let colorsArr = primaryColors.reduce((previous, primaryColor) => {
//     previous.push(primaryColor.color);
//     return previous;
// },[]);

// console.log(colorsArr);

// //experimental
// function balanced(stringToSplit, seperator) {
//     var arrayOfStrings = stringToSplit.split(seperator);
//     console.log(arrayOfStrings);
// }
// balanced('()()()()', '');

// function balancedParens(string) {
//     //Here's the trick, ! is used to convert the entire expression to a boolean
//     //of course +nums & -nums are going to be truthy, 0 falsy
//   return !string.split("").reduce((prev, char) => {
//       if (prev < 0 ) { return prev; } // * handles our edge case - see below
//       if (char === "(") { return ++prev; }
//       if (char === ")") { return --prev; }
//     return prev;
      
//   }, 0) //in this case creat a counter
//         //every time we see an opening parens +1, closing parens -1
// }

// let ex1 = balancedParens(" ()()())( "); //expect to return false;
// console.log(ex1);
// // * If you think of how this is added up, it will leave our counter in the negatives 
// // if we're ever leading with  closing parenthesis (and we know something is wrong),
// // So we just need to add another case, to our logic: 


// //challenge: use reduce to return a new summation object {sitting: #, standing: #}
// var desks = [
//   { type: 'sitting' },
//   { type: 'standing' },
//   { type: 'sitting' },
//   { type: 'sitting' },
//   { type: 'standing' }
// ];

// var deskTypes = desks.reduce((prev, desk) => {
//     if(desk.type === 'sitting') {  prev.sitting++;}
//     if(desk.type === 'standing') {  prev.standing++;}
//     return prev;

// }, { sitting: 0, standing: 0 });
// console.log(deskTypes);

// //Hardmode: Custom 'Unique' Helper
// //Another really hard one!  Write a function called 'unique' that will remove all the 
// //duplicate values from an array. var numbers = [1, 1, 2, 3, 4, 4]; => [1, 2, 3, 4 ]
// //with .includes() array method
// var numbers = [1, 1, 2, 3, 4, 4];
// function unique(array) {
//     return array.reduce((prev, number) => {
//         if(!prev.includes(number)) {prev.push(number)}
//         return prev;
//     }, [])
// }
// let newNumbers = unique(numbers);
// console.log(newNumbers);

// with our .find() helper:
var numbers = [1, 1, 2, 3, 4, 4, 5, 6, 6];
function unique(array) {
    return array.reduce((prev, number) => {
        if(!prev.find(item => item === number)) {
            prev.push(number);
        }
        return prev;
    }, [])
}

let uniqueNumbers = unique(numbers);
console.log(uniqueNumbers);



// function unique(inputArray){
  
//   return inputArray.reduce((previous, current) => {
    
//     if(!previous.find((prevItem) => { return prevItem === current; })){
//         previous.push(current);
//     }
    
//     return previous;
//   }, []);
// }
// unique(numbers);


// //studies to solve hard mode challenge
// const fruits = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5},
//     {name: 'cherries', quantity: 7} //wil not get returned with find - 1st item only
// ];

// //ES2015 no return statement of curly brackets needed if logic fits on one line.
// const findCherries = fruits.find(fruit => fruit.name === 'cherries'); 
// console.log(findCherries);  //{ name: 'cherries', quantity: 5 }

// var numbers = [1, 1, 2, 3, 4, 4];
// console.log(!numbers.includes(2)); // false



// function unique(array) {
//   return array.reduce((pre,item)=>{
//       if(!pre.includes(item)){pre.push(item)}
//       return pre;
//   },[]);
// }

// console.log(unique(numbers));   // [1, 2, 3, 4] correct