'use strict';
// //Old school
// function makeAjaxRequest(url, method) {
// 	if(!method) {
// 		method = 'GET';
// 	}
//     return method;
// 	//most common ajax request by far is GET
// 	//logic goes here
// }
// //either of these would work:
// let one = makeAjaxRequest('google.com', 'POST');
// let two = makeAjaxRequest('google.com')
// console.log(one);
// console.log('---');
// console.log(two);

// //New and cool
// function makeAjaxRequest(url, method = 'GET') {
//     return method;
// }
// //either of these would work:
// let one = makeAjaxRequest('google.com', 'POST');
// let two = makeAjaxRequest('google.com')
// console.log(one);
// console.log('---');
// console.log(two);
// console.log('---');

// //if you pass in null, the method will not get reassigned
// let three = makeAjaxRequest('google.com', null);
// console.log(three);

//Use cases:
function User(id) {
    this.id = id;
}
function generateId() {
    return Math.floor(Math.random() * 999999);
}
//adding a concept, where you take a user and promote them to admin
// function createAdminUser(user) {
//     user.admin = true;
//     return user;
// }
//Ugly nested call in order to use this
// let user1 = createAdminUser(new User(generateId()));
// console.log(user1); //User { id: 394292, admin: true }

// //So in practice, this could be a good use of Default Arguments
// function User(id = generateId()) {
//     this.id = id;
// }
// let user2 = createAdminUser(new User() );
// console.log(user2);

//Even better - move the entire statement inside the parens into the 
//default argument for the User constructor function:
function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}
let user3 = createAdminUser();
console.log(user3);

//You could also then take an existing user:
const user4 = new User(generateId());
//Then make an Admin out of them - overriding the default user argument.
console.log(createAdminUser(user4));

//let user1 = new User(1);

// //random 1-10 generator - practice this
// function randomRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let oneToTen = randomRange(1, 10);
// console.log(oneToTen);
