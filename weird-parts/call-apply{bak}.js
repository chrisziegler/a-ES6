var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName() {
        let fullname = this.firstname + ' ' + this.lastname
        return fullname;
    }
};


(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------');
}).apply(person, ['es', 'kor']);

