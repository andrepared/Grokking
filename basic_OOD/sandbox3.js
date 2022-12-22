//Inheritance 

// Base class (Parent)
class Vehicle {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    getName() {
    return 'The car is a ' + this.name + ' ' + this.model
    }
}
// Single Inheritance
// FuelCar class extending from Vehicle Class
// Derived class (child)
class FuelCar extends Vehicle {
    constructor(name, model, combustType) {
        super(name, model);
        this.combustType = combustType;
    }
    getFuelCar() {
        return this.getName() + ', combust type is ' + this.combustType;
    }
}

// Hierarchal inheritance 
// Alongside the FuelCar class, the ElectricCar class is also extending from Vehicle Class
//Another Derived class(child)
class ElectricCar extends Vehicle {
    constructor(name, model, batteryPower) {
        super(name, model);
        this.batteryPower = batteryPower;
    }
    getElectricCar() {
        return this.getName() + ', battery power is ' + this.batteryPower;

    }
}

// Multi-level inheritance 
// GasolineCar class is derived from the FuelCar class, which is further derived from the Vehicle class
//Derived class (Grandchild)
class GasolineCar extends FuelCar {
    constructor(name, model, combustType, gasCapacity) {
        super(name, model, combustType); 
        this.gasCapacity = gasCapacity;
    }
    getGasCapacity() {
        return this.getFuelCar() + ', gas capacity is ' + this.gasCapacity;

    }
}
// Javascript does not support Multiple inheritance via classes

// main 
console.log('Single Inheritance:');
let Fuel = new FuelCar('Tesla', 'ModelX', '200MWH'); 
console.log(Fuel.getFuelCar());
console.log('');

console.log('Hierarchal Inheritance'); 
let Electric = new ElectricCar('Honda', 'Accord', 'Petrol');
console.log(Electric.getElectricCar());
console.log('');

console.log('Multi-level Inheritance');
let Gasoline = new GasolineCar('Toyota', 'Corolla', 'Gasoline', '300MWH'); 
console.log(Gasoline.getGasCapacity()); 
console.log('');


// We cannot use inheritance if a IS-A relationship does not exist between classes
// Types of Inheritances 
// 5 Types Single, Multiple, MultiLevel, Hierarchal and Hybrid


// ADVANTAGES OF USING INHERITANCE 
//Reusability -- no need tp duplicate methods inside child classes that also live in parent classes. 
//Code modification - Ensures that all changes are localized and inconsistances are avoided. 
// Extensibility -- we can extend the base class as per requirements of the derived class. It provides an easy way to upgrade or enhance specific parts of a product without changing the core attributes. 

// Data hiding 
// A base class can keep some data private, so the derived class cannot alter it