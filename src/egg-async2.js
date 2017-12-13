// const fetch = require("node-fetch");

// async function fetchGitHubUser(handle) {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     const body =  await response.json();
//     if (response.status !== 200) 
//         throw Error(body.message)
    
//     return body;
// }

// fetchGitHubUser("fooman2344324")
//     .then(user => {
//         console.log(user);
//     })
//     .catch(err => {
//         console.log(`Error: ${err.message}`)
//     })

    //To illustrate how async/await can be used with try/catch blocks:
// const fetch = require("node-fetch");

// async function fetchGitHubUser(handle) {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     const body =  await response.json();
//     if (response.status !== 200) 
//         throw Error(body.message)
    
//     return body;
// }

// async function showGitHubUser(handle) {
//     try {
//         const user = await fetchGitHubUser(handle);
//         console.log(user.name);
//         console.log(user.location)
//     } catch (err) {
//         console.log(`Error: ${err.message}`);
//     }
// }

// showGitHubUser("fooman56439438");

//Await Multiple Promises Sequentially or COnsurrently
// const fetch = require("node-fetch");

// async function fetchFromGitHub(endpoint) {
//     const url = `https://api.github.com${endpoint}`;
//     const response = await fetch(url);
//     return await response.json();
// }

// async function showUserAndRepos(handle) {
//     const user = await fetchFromGitHub(`/users/${handle}`);
//     const repos = await fetchFromGitHub(`/users/${handle}/repos`);
//     //once we have both log out:
//     console.log(user.name);
//     console.log(`${repos.length} repos`);
// }
// showUserAndRepos("chrisziegler");

//lets fix our code and "boil our eggs at the same time"
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function showUserAndRepos(handle) {
    //change name syntax cause now we're storing the promise (object) in the variables
    //and not the results
    const userPromise =  fetchFromGitHub(`/users/${handle}`);
    const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);
    //we now have 2 concurrently running http requests
    //we're not waiting for the 1st to finish before making 2nd one'
    //we are now awaiting both our user and our repos
    //pausing execution on those methods until their promises are settled
    //the slower of the 2 methods determine the speed of the execution
    const user = await userPromise;
    const repos = await reposPromise;
    console.log(user.name);
    console.log(`${repos.length} repos`);
}
showUserAndRepos("mariusschulz");