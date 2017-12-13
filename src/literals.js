'use strict';
// //using ES6 object literal notation to shortcut key=value pairs
function createBookShop(inventory) {
    return {
        // inventory: inventory,
        inventory,
        //inventoryValue: function() {}
        inventoryValue() {
           return this.inventory.reduce((sum, book) => sum + book.price, 0);

        },
        //priceForTitle: function(title) {
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'The 3-Body Problem', price: 15 }
]

const bookShop = createBookShop(inventory);
// remember bookShop now holds the value of a returned Object


let inventoryValue = bookShop.inventoryValue();
let priceForPotter = bookShop.priceForTitle('Harry Potter');

console.log( 'inventoryValue = ', '$'+inventoryValue+',', 'priceForPotter =', '$'+priceForPotter);

