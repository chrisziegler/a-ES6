// function greet(whattosay){     return function(name){
// console.log(whattosay + ' ' + name)     } } var english = greet('Hello') //
// do other stuff english('Jim') //still has a rerence to the whatotsay variably
// when you run it //even though greet has popped up-off the stack, and english
// is //just a reference to the function it returns

// function buildFunctions() {
//     var arr = []
//     for (var i = 0; i < 3; i++) {
//         arr.push(
//             function() {
//                 console.log(i)
//             }) 
//     }
                
//     return arr
// }

// var fs = buildFunctions()
// fs[0]() //THIS WAY JUST RETURNS I = 3 FOR ALL FUNCTIONS

function buildFunctions() {
    var arr = []
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j)
                }
                
            }(i))
        ) 
    }
                
    return arr
}

var fs = buildFunctions()
fs[0]()
fs[1]()
fs[2]()

/*        arr.push(
            (function() {
                console.log(i)
            }(i))) 
    } also seems to work for just logging */