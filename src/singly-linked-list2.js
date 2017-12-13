function Node(data) {
    this.data = data;
    this.next = null;
};

function LinkedList() {
  // head will be the top of the list
  // we'll define it as null for now
  this.head = null;
  this.length = 0;
  
    this.add = function(data) {
    //we're running linked.add("42"), need a new instance of Node object added
    var nodeToAdd = new Node(data),
        //this.head null the 1st time THEN it will always be equal to nodeToAdd
        nodeToCheck = this.head;
        //either null (1st time, continue with if) or equal to nodeToAdd
        
    // empty list 1st time check (if the head is null)
    if(!nodeToCheck) {
      //create Node instance, set "linkeds" head equal to that. ONLY RUN ONCE, This is THE head
      this.head = nodeToAdd;
      //number of bodes will now be one
      this.length++;  
      //done with add so return function
      return nodeToAdd;
    }

     while(nodeToCheck.next) {
      //while true set nodeToCheck as the next node
      nodeToCheck = nodeToCheck.next;
    }
    // once were at the end of the list - SET THE NEXT PROPERTY OF THE LAST NODE
    //to the node we're going to add - this is where (data) winds up - as this value
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }
}

LinkedList.prototype.get = function(num) {
  var nodeToCheck = this.head,
      count = 0;
  // a little error checking
  if(num > this.length) {
    return "Doesn't Exist!"
  }
  // find the node we're looking for
  while(count < num) {
    nodeToCheck = nodeToCheck.next;
    count++;
  }
  return nodeToCheck;
}

let linked = new LinkedList()
linked.add(1)
linked.add(2)
linked.add(3)
linked.add(4)
linked.add(5)
linked.add(6)
console.log(linked.head)
console.log('--------------------')
console.log(linked.get(4))



