//ES6 'extends' keyword

class Flash {                               //class declaration
    constructor (x, y) {                    //constructor declaration
        this.x = x;                         //instance variables
        this.y = y;
    }
    run () {                                //method declaration (ES6 object concise declaration)
        return `Fastest man alive ${this.x * this.y}`;
    }
}

class Superman extends Flash {              //create subclass (use 'extends' keyword)
    constructor(x, y, z) {                  //construtor on subclass
        super(x, y);                        //invoke constructor on parent class
        this.z = z;
    }
    fly () {                                //method declaration 
        return `I'm an alien ${this.x + this.y + this.z}`;
    }
}

var justAnInstance = new Flash(1, 2)
console.log(justAnInstance.run());                
console.log(justAnInstance.x);                   
console.log(justAnInstance.y);                                 
console.log(justAnInstance instanceof Flash);
console.log('---------------------')
var superman = new Superman(3,6,9);         //object instantiation ('new' keyword)
console.log(superman.run());                //Fastest man alive 18 (invoked through prototype delegation)
console.log(superman.x);                    //3
console.log(superman.y);                    //6
console.log(superman.z);                    //9
console.log(superman.fly());                //I'm an alien 18
console.log(superman instanceof Superman);  //true