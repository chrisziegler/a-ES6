const bigData = []
let i 
for (i; i < 1000000; i++) {
    bigData[1] = i
}

console.time('bigData');
const filterMappedData = bigData.filter(item => item % 2 ===0)
.map(item => item * 2)
console.timeEnd('bigData')

console.time('bigDataReduce');
const reduceData = bigData.reduce((acc, value) => {
    if (value % 2 === 0) {
        acc.push(value * 2)
    }
    return acc
},[]) 
console.timeEnd('bigDataReduce')