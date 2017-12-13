//currying
function multiply(a,b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2)
const multiplyByThree = multiply.bind(this, 3)
console.log(multiplyByThree(10))