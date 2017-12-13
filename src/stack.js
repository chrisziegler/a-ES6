//A stack organizes data into sequential order. 
function Stack() {
    this._size = 0
    this._storage = {}
}
//push data - onto end of object, not array
Stack.prototype.add = function(data){
    //prefix the incrementer start on 1
    let size = ++this._size 
    this._storage[size] = data
}
//pop dat - off endo of object (lIFO)
Stack.prototype.delete = function(){
    delete this._storage[this._size]
    this._size--
}
Stack.prototype.print = function() {
    let storage = this._storage
    for(let prop in storage) {
        console.log(prop + ': ' + storage[prop]) 
    }
}

const stack = new Stack()

stack.add('one')
stack.add('two')
stack.add('three')
stack.print()
stack.delete()
stack.print()


