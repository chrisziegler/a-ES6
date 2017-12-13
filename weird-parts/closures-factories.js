function makeGreeting(language) {

    return function greet(firstname, lastname) {
        let languageChoice = language === 'en' ? "hello" : language === 'es' ? 'hola' : 0
        if (languageChoice) return (`${languageChoice} ${firstname} ${lastname}`)
    }
}

var greetEnglish = makeGreeting('en')
var greetSpanish = makeGreeting('es')

console.log(greetEnglish('ganghis', 'khan')) // console when returning