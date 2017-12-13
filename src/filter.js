'use strict';

const products = [
    {name: 'oranges', type: 'fruit',quantity: 0, price: 1},
    {name: 'asparagus', type: 'vegetable',quantity: 10, price: 15},
    {name: 'raisin bran', type: 'cereal',quantity: 30, price: 13},
    {name: 'ground beef', type: 'meat',quantity: 3, price: 100},
    {name: 'eggs', type: 'dairy'},
    {name: 'Wheaties', type: 'cereal',quantity: 1, price: 25}
];

//Old n busted
// let length = products.length;
// let cereals = [];

// for (let i = 0; i < length; i++) {
//     if(products[i].type === 'cereals') {
//         cereals.push(products[i]);
//     }  
// }
//     console.log(cereals);

// const cereals = products.filter(product => product.type === 'cereal');
// console.log(cereals)

//more advanced - Type is cereal, quant is > 0, price < 15
// const cheapCereals = products.filter(product => {
//     return product.type === 'cereal' && product.quantity > 0 && product.price < 25;
// })
// console.log(cheapCereals);

//data structure for below code
// const post = { id: 4, title: 'New Post'};
// const comments =  [
// {postId: 4, content: 'awesome post!'},
// {postId: 3, content: 'it was okay'},
// {postId: 4, content: 'neat'}
// ];

//make a function that given a list of comments, make a list of just the comments associated with that post
// function commentsForPost(post, comments) {
//   let matches = comments.filter(comment => {
//       return comment.postId === post.id;
//   })
//   return matches;
// }
// let matchedPost = commentsForPost(post, comments);
// console.log(matchedPost);

// var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// var filteredNumbers;

// filteredNumbers = numbers.filter(number => number > 50)

// console.log(filteredNumbers);

var numbers = [10, 20, 30, 40, 50];


    function reject(array, iteratorFunction) {
       return array.filter((item) => !iteratorFunction(item))
    }
    
    let lessThanFifteen = reject(numbers, function(item) {
        return item < 15
    })

    console.log(lessThanFifteen);