// const g = G$('John', 'Doe');
// g.greet().setLang('es').greet(true).log();

// gets a new object (the architecture mimicing jQuery's source structure
// allows us to not have to use the 'new' operator here)
$('#login').click(function() {
    //instantiates a new Greetr object
    let loginGrtr = G$('John', 'Doe'); 
    //hide the entire UI (div) after we click button
    $('#logindiv').hide();
    //take our loginGrtr and set our language
    //instead of passing in lang above, to demonstrate chainable methods
    //we need that selectors id to be set to its value using jQuery method .val()
    //then we chain our HTMLGreeting method, pass it our jQuery selector to create a jQuery object
    //similiar to textContent or innerHTML I suppose
    //and then 'true', since we want a formal greeting
    //then log() it as well, why not?
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});

