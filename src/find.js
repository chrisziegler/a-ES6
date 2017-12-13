'use strict';

// const users = [
//     {name: 'Alex'},
//     {name: 'Betty'},
//     {name: 'Jim'}
// ]

// const betty = users.find(user => user.name === 'Betty');
// console.log(betty);


// function Car(model) {
//     this.model = model;
// }
// const cars = [
//     new Car('Buick'),
//     new Car('Camaro'),
//     new Car('Focus')
// ];

// console.log(cars);
// // [ Car { model: 'Buick' },
// //   Car { model: 'Camaro' },
// //   Car { model: 'Focus' } ]

// const buicks = cars.find(car => car.model === 'Buick')
// console.log(buicks);


// var accounts = [
//   { balance: -10 },
//   { balance: 12 },
//   { balance: 0 }
// ];

// const account;
// account = accounts.find(account => account.balance === 12)
// console.log(account);


// var ladders = [
//   { id: 1, height: 20 },
//   { id: 3, height: 25 }
// ];

// findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }


var ladders = [
   {id: 1, height: 20},
   {id: 3, height: 25},
   {id: 5, height: 45}
];


// findWhere(array, criteria)

// findWhere(ladders, { height: '20 feet' });


//experimental mutation with forEach
// let newArr = [];
// ladders.forEach(ladder => {
//     if(ladder.height === 25) {
//        ladder.id = 7;
//        newArr.push(ladder);
//     }
// });

// console.log(newArr);
// console.log(ladders);

//for of ladder array
// let medium; // let has block scope, decalre here - initialized in if block
// for (let item of ladders) {
//     if(item.height > 24 && item.height < 44) {
//         medium = item;
//     }
// }
// console.log('Medium sized ladders available: ', medium);


