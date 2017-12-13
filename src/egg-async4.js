// //lets go ahead and import bluebird
// const BLuebird = require("bluebird");

// async function main() {
//     console.log('Working...');
//     await BLuebird.delay(2000);
//     console.log('Done');
// }

// main();

//Iterate Asynchronously with the for-await-of Loop
//uses a simple Generator



function* someGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

function main() {
    for (const value of someGenerator()) {
        console.log(value);
    }
}

main();


//Let's make it async with some home spun delays
// //DOESN'T WORK - SEE COMMENTS
// //would need a proper polyfill in a real application - this is a "monkey patch""
// Symbol.asyncIterator = Symbol.asyncIterator || Symbol("asyncIterator");
// //LOL he also ran a build script here to tranpile since node doesn't support
// // async Iteration yet - don't have access to eggheads code so fuck it.
// const delay = (ms) => new Promise(resolve => {
//     setTimeout(resolve, ms);
// });

// async function* someGenerator() {
//     await delay(1000);
//     yield 1;
//     await delay(1000);
//     yield 2;
//     await delay(1000);
//     yield 3;
// }

// async function main() {
//     for await (const value of someGenerator()) {
//         console.log(value);
//     }
// }

main();