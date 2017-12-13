// as bare-bones as it gets. No useful way to go directly to
// or delete nodes.

function LinkedList(){  
  this.head = null;
}

LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

var sll = new LinkedList();
//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList 
console.log(sll.head); //Object {data: 2, next: Object}
// actually { value: 2, next: { value: 3, next: { value: 4, next: null } } }
console.log(sll.head.next); //Object {data: 3, next: Object}
// { value: 3, next: { value: 4, next: null } }
console.log(sll.head.next.next); //Object {data: 4, next: null}