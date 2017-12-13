'use strict';
//class expression syntax
//const Food = class  {
// Class definition is the same as below. . . 

// This is a named class expression -- 
// const Food = class FoodClass {
// Class definition is the same as below . . .
//you can refer to this class by name within the class body . . . 
// console.log(`${FoodClass.name} | instead of this.name

class Food {
    constructor (name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
    
    toString () {
        return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
    }

    print () {
        console.log( this.toString() );
    }
}

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);
chicken_breast.print();
console.log(chicken_breast.protein);




//Classes created with extends are called subclasses, or derived classes.
class FatFreeFood extends Food {

//once more this is where you initialize your object's properties.
//this time it just happens to be the properties on the subclass
    constructor (name, protein, carbs) {
        // If initializing your derived class requires you to use the parent class's constructor,
        //here we pass the 0 for the fat property on the parent class
        //we use it below when we call the parents print method, calling super passed along
        //the context for ${this.fat} to mean $fat_free_yogurt.fat}
        //since fat_free_yogurt is an instance of the FatFreeFood sublass of Food
        super(name, protein, carbs, 0);
        //our super allows instances of this sub-class to use the Food constructor to initalize
        // it's shared properties on the parent class using it's onwn context of 'this'
    }

    print () {
        super.print(); //calls the method on the parent class
        //this is FatFreeFoods own print method could have called it hwatever we
        //wanted and still include the parent method as part of what it does
        console.log(`Would you look at that -- ${this.name} has no fat!`);
    }

}

const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);
fat_free_yogurt.print();


//now if we had instantiated a new Food class for FatFreeFoods instead of creating
//a sublass, we would not have had this easy method of instatiatiating a fat_free_yogurt class 
//in that category - so it gives us another layer of inheritance in the syntactical
//sugar which is ES6 classes