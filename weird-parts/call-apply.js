var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName() {
        let fullname = this.firstname + ' ' + this.lastname
        return fullname;
    }
}

// const logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName())
//     console.log('Arguments: ' + lang1 + ' ' + lang2)
//     console.log('--------------')
// }

//function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}
var borrowed = person.getFullName.apply(person2)
console.log(borrowed) //Jane Doe




// const logPersonName = logName.bind(person);
// logPersonName('english');
// logName.call(person, 'english', 'spanish')
// logName.apply(person, ['english', 'spanish'])

//bind actually returns a new function
//it makes a copy of the logName function

//alternatively we could have just created the funciton on the fly:
// const logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName())
//     console.log('Arguments: ' + lang1 + ' ' + lang2)
//     console.log('--------------')
// }.bind(person)
// logName('english', 'spanish')
// (function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('--------------');
// }).call(person, ['es', 'kor']);

