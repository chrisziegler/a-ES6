function Queue() {
    this._oldestIndex = 1
    this._newestIndex = 1
    this._storage = {}
}

Queue.prototype.size = function(){
    return this._newestIndex - this._oldestIndex
}

Queue.prototype.enqueue = function(data) {

    this._storage[this._newestIndex] = data
    this._newestIndex++
}

Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        console.log('old: ' + this._oldestIndex + ' new: ' + this._newestIndex)
        return deletedData; //returning the item works like pop() or shift()
    }
    // else console.log('Queue Empty')
};

Queue.prototype.print = function() {
    let storage = this._storage
    for(let prop in storage) {
        console.log(prop + ': ' + storage[prop])
    }
}



const queue = new Queue()
queue.enqueue('apples')
queue.enqueue('bananas')
queue.enqueue('crackers')
queue.enqueue('diapers')
queue.print()
queue.dequeue()
console.log('-------------------')
queue.print()
queue.enqueue('enchiladas')
queue.dequeue()
queue.dequeue()
queue.enqueue('fajitas')
console.log('-------------------')
queue.print()
console.log(queue.dequeue())


// // LETS LOOK AT THIS WITH AN ARRAY
// // THIS WORKS, BUT WE CANT USE KEY/VALUE PAIRS UNLESS WE PASS OUR DATA IN AS OBJECTS
// function Queue() {
//     this._storage = []
// }

// Queue.prototype.enqueue = function(data) {
//     this._storage.push(data) //newest data always get pushed to end
// }
// //so oldest data should always be at the begining of the array
// Queue.prototype.dequeue = function() {
//     let removed = this._storage.shift()
//     return removed
// }

// Queue.prototype.print = function() {
//     let storage = this._storage
//     storage.forEach(item => console.log(item))
// }
