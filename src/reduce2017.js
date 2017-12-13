//we got an array, and we want to tally the votes for each framework
const votes = [
    "angular",
    "angular",
    "react",
    "ember",
    "vanilla",
    "react",
    "ember",
    "react"
]
//better, working with an (alphabetically) sorted array
let total = votes
    .sort((a, b) => a > b)
    .reduce((tally, vote)=>{
        if(!tally[vote]) {
            tally[vote] = 1
        } else tally[vote] = tally[vote] + 1
        return tally

    },{})
document.write('<pre>' + JSON.stringify(total) + '</pre>');

// const reducer = votes.reduce((tally, vote) => {
//     if (!tally[vote]) {
//         tally[vote] = 1
//     }
//     else tally[vote] = tally[vote] + 1
//         return tally
// },{})

// document.write('<pre>' + JSON.stringify(reducer) + '</pre>');

// If you like, you can use a more compact implementation of the reducer:
// var reducer = function(tally, vote) {
//   tally[vote] = (tally[vote] || 0) + 1
//   return tally;
// }