// var jQuery = require('jQuery');

(function(global, $) {
    const Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    };

    const supportedLangs = ['en', 'es' ];
    const greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    const formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    const logMessages = {
        en: 'Logged in',
        es: 'inició sesión'
    };

    Greetr.prototype = {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`
        },
        validate: function() {
            if (supportedLangs.indexOf(this.language ) === -1) {
                throw "invalid language";
            }
        },
        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}!`
        },
        formalGreeting: function() {
            return `${formalGreetings[this.language]} ${this.fullName()}`
        },
        greet: function(formal) {
            let msg;

            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting()
            }
            //IE doesn't actually have a console variable unless its console is open
            //here we just make sure there is a console variable
            if (console) {
                console.log(msg);
            }
            //t'this' refers to the calling object at execution time
            // makes this method chainable
            //so just like ES6 map and filter return an object (array)
            //we return the calling object (whatever name we instantiate as)
            // and can call say:
            //const g = G$('Chris', 'Ziegler')  //defualt language = english
            //g.greet().setLang('es').log()  -- I assume  -- check syntax at end
            //otherwise we'd have to call these functions one at a time or use weird nested syntax
            return this;

        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ' ' + this.fullName());
            }
            return this;
        },
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            let msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);
            return this;

        }
    };

    Greetr.init = function (firstName, lastName, language) {
        // var self = this;
        this.firstName = firstName || ''; //default to empty string
        this.lastName = lastName || '';
        this.language = language || 'en'; //default language
        this.validate();
    };
    // makes sure all the objects instantiated by Greet
    // have access to all the methods we placed on our giant object literal
    //Greetr.prototype
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;
 
}(window, jQuery)); 