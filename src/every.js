// const computers = [
//     { name: 'Apple', ram: 24 },
//     { name: 'Compaq', ram: 4 },
//     { name: ' Acer', ram: 16 }
// ];

// let allComputersCanRun = true;
// let onlySomeComputersCanRun = false;
// const every = computers.every( computer => {
//     return computer.ram > 16; // false
// })


// if (!every) {
//     allComputersCanRun = false;
//     onlySomeComputersCanRun = true;
// }

// console.log(onlySomeComputersCanRun);
// // we'd expect this to retun false since Compaq has only 4
// console.log(allComputersCanRun);

function Field(value) {
    this.value = value;
};

Field.prototype.validate = function() {
    return this.value.length > 0;
};

//In the DOM we would use an event to call this function
const username = new Field('chrisz');
const password = new Field('abc123');
const birthdate = new Field('12/27/66');


//console.log(username.validate()); returns true -> !empty string
// now we could do somethinng like username.validate() && password.validate(); to validate
//our fields, but what happens over time if we add more fields to our form like b-day
// and credit cards, etc.

let fields = [username, password, birthdate];
const formIsValid =  fields.every(field => field.validate);

if (formIsValid) {
    console.log('allow user to submit!')
} else {
    console.log('please complete all the form!')
}