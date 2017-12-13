'use strict';

// //silly analogy example
// function* shopping() {
//     //stuff on the sidewalk
//     //walking down the sidewalk
//     //go into the store with cash
//     const stuffFromStore = yield 'cash';
//     // returned w/stuff -> 'groceries' is now assigned to stuffFromStore
//     // walking to laundry place
//     const cleanClothes = yield 'laundry';

//     //walking back home
//     return [stuffFromStore, cleanClothes];
// }
// //stuff in the store
// const gen = shopping();
// console.log(gen.next()); // leaving out house -> {'value': 'cash', 'done': false }
// // we've left the above generator function - yielding w/ a value of cash
// // we're down here in the store now - walking the aisles
// //finally purchase our stuff
// console.log(gen.next('laundry')); // {"value": "groceries, "done": true}
// //leaving the store with groceries
// //we re-neter our generator function right where we left off at the yield
// console.log(gen.next('groceries'));

//USING FOR OF LOOP
//example to expand upon? 
// function* colors() {
//     yield 'red';
//     yield 'blue'
//     yield 'green';
// }

// const myColors = [];
// for (let color of colors()) {
//     myColors.push(color);
// }
// console.log(myColors);

//More practical? Still not promise related.
//Say you wanted to just iterate through employees

const testingTeam = {
    size: 2,
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};
const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    testingTeam: testingTeam, //engineering team needs to know who the testing team is
    //added Symbol.iterator
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam; //hey there,s this other object here, iterate over it, as well
    }

};

// function* TestingTeamIterator(team) {
//     yield 'lead';
//     yield 'tester';
// }

//REPLACED with that Symbol.iterator
// function* TeamIterator(team) {
//     yield team.lead;
//     yield team.manager;
//     yield team.engineer;
//     // const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
//     // yield* testingTeamGenerator;
//     //replaced for Symbol.iterator with:
//     yield* team.testingTeam;
// }

const names = [];
// for (let name of TeamIterator(engineeringTeam)) { //refactored for Symbol.iterator
    for (let name of engineeringTeam) {
    names.push(name);
}
console.log(names); //[ 'Jill', 'Alex', 'Dave', 'Amanda', 'Bill' ] jesus christ!




