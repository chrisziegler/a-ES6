'use strict';



const promise = new Promise((resolve, reject) => {
    setTimeout(() => { //simultate long running process
        resolve();
    }, 3000)
});

promise
    .then(() => console.log('finally finished'))
    .then(() => console.log('i ran also'))
    .catch(() => console.log('uh oh, caught!')); // only run w/reject()

// //behind the scenes of a promise request with old schhol syntax
// const promise = new Promise((resolve, reject) => {
//     var request = new XHTMLRequest()
//     // make request
//     request.onload = () => { //used the browser to signal completition of data transfer
//         resolve();
//     };
// });