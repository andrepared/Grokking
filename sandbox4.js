//Polymorphism 

//Dynamic Poly
// Phenonmenon that allows an object to have several different forms and behaviors.

//Dynamic Poly 
//is the mechanism that defineds the methods with the same name, return type, and parameters in the base class and derived classes. Hence, the call to an overridden method is decided at runtime. That is why dynamic poly is also known as runntime polymorphism, it is achieved by method overriding. 

// METHOD OVERRIDING 
//is a subclass that provides a specific implementation of a method that had already been defined in one of its parent classes.
class Animal {
    printAnimal() {
        console.log('I am from the Animal Class');    
    }
    printAnimalTwo() {
        console.log('I am from the Animal Class') 
    }
}

class Lion extends Animal {
    printAnimal() {
    console.log('I am from the Lion Class')
    }

}

const animal = new Lion 
animal.printAnimal()
animal.printAnimalTwo()

// Static 
//compile time poly, it is achieved by method overloading or operator overloading. 
//Method Overloading 
// if a class has more than one method with the same name, but euther the number or arguments are different, or the type of arguments are different. 

//Operator Overloading 
// Java and JS do not support this.
//Method Overloading
class Sum {
    addition(a, b, c = 0) {
        return a + b + c;
    }
}
const sum = new Sum; 
console.log(sum.addition(14, 35)); 
console.log(sum.addition(31, 34, 43)); 

// _____________________________// 
class Area {
    calculateArea(length, breadth = -1) {
        if (breadth != -1)
            return length * breadth;
        else
            return length * length;            

    }
}
let area = new Area; 
console.log('Area of rectangle = ' + area.calculateArea(3, 4)); 
console.log('Area of square: ' + area.calculateArea(6));


