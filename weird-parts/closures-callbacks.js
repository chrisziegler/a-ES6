function sayHiLater() {
    let greeting = 'Hi!'
    //say we want something to happen after a few seconds of waiting
    setTimeout(() => {
        console.log(greeting)
    }, 3000)
}
sayHiLater()
console.log('in the mean time')

function tellMeWhenDone(callback) {
    let a = 1000; // some work
    let b = 2000; // some work
    callback()
}

tellMeWhenDone(function() {
    console.log('I am done.')
})
tellMeWhenDone(function() {
    console.log('Really done now...')
})
