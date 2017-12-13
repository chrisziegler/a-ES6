// const fetch = require("node-fetch");

// function showGitHubUser(handle) {
//     const url = `https://api.github.com/users/${handle}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(user => {
//             console.log(user.name);
//             console.log(user.location);
//         });
// }

// showGitHubUser("chrisziegler");

//Use an async function to allow us to use await keyword and implicitly return a Promise
// const fetch = require("node-fetch");
// async function showGitHubUser(handle) {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     const user = await response.json();
//     console.log(user.name);
//     console.log(user.location);
// }
// showGitHubUser("chrisziegler");

// Let's refactor this program such that the function retrieves the user, 
// and then returns it to the caller, who can decide what to do with it.
// const fetch = require("node-fetch");
// async function showGitHubUser(handle) {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     // const user = await response.json();
//     // return user;
//     return await response.json();
// }

// showGitHubUser("chrisziegler")
//     .then(user => {
//         console.log(user.name);
//         console.log(user.location);
//     })

    //Let's convert our code into different types of functions other than declarations
    // expressions, arrow funcitons, and methods:
// const fetch = require("node-fetch");
// const showGitHubUser = async (handle) => {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);

//     return await response.json();
// }

// showGitHubUser("chrisziegler")
//     .then(user => {
//         console.log(user.name);
//         console.log(user.location);
//     })

//IIFE - wrap that await keyword since it must be used within an async function:
// const fetch = require("node-fetch");
// const showGitHubUser = async (handle) => {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     return await response.json();
// }

// //(async function() { .... let's use an arrow function istead'
// (async () => {
//     const user = await showGitHubUser("chrisziegler")
//     console.log(user.name);
//     console.log(user.location);
// })();



//Class Methods of async/await
const fetch = require("node-fetch");

//Let's define a GitHub API class, and that class has a ES6 Object literal syntax method called fetchUser
class GitHubApiClient {
    async fetchUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const response = await fetch(url);
        return await response.json();
    }
}

//(async function() { .... let's use an arrow function istead'
(async () => {
    //create an instance of the class, and call it client
    const client = new GitHubApiClient();
    const user = await client.fetchUser("chrisziegler")
    console.log(user.name);
    console.log(user.location);
})();