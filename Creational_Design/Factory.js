// Factory design pattern 
// Gives us object creation mechanisms that help with flexibiilty and reusability 

// creates factory function 

function vehicleFactory(manufacturer, plateNO) {

    return {
        manufacturer,
        plateNO, 
        startEngine() {
        console.log('reving engine') 
        },
        drive() {
        console.log('driving car...')
        }
    
    }

}

const Vehicle1 = vehicleFactory('Toyota', 12345); 
console.log(Vehicle1)

const Vehicle2 = vehicleFactory('Ford', 67890); 
console.log(Vehicle2);
// --VERY BASIC EXAMPLE ^--- //

// --  MORE COMPLEX EXAMPLE --// 
class Car {
    constructor(options) {
        this.wheels = options.wheels || 4; 
        this.doors = options.doors || 4; 
        this.color = options.color || 'silver'; 
        
    }

}

class Truck {
    constructor(options) {
        this.wheels = options.wheels || 8; 
        this.doors = options.doors || 2; 
        this.color = options.color || 'red'; 
    }
}

class Factory {
    create = (options, vehicleType) => {
        if (!vehicleType) {
            return 'unable to create vehicle. Please specify vehicle type and try again!'
        } 
        let vehicle; 
        
        if (vehicleType === 'car') {
            vehicle = new Car(options);
        } else if (vehicleType === 'truck') {
        
            vehicle = new Truck(options);
        }

        vehicle.vehicleType = vehicleType;
        
        vehicle.startEngine = () => console.log(`Reving ${vehicleType} engine`);
        
        vehicle.driveVehicle = () => console.log(`Driving ${vehicleType}..`);
        
        vehicle.stopEngine = () => console.log(`Stop ${vehicleType} engine`);

        return vehicle;
    }


};

const vehicleFactory = new Factory(); 

const car = vehicleFactory.create({
    wheels: 4,
    doors: 2,
    color: 'black',
}, 'car');

console.log(car);
console.log(car.startEngine());
console.log(car.driveVehicle());


// ---------------------------------------------// 
// Alternatice implementation is to make us of class constructors // 
// This would allow us to create instance of our Class Factory // 

class Car {
    constructor(options) {
        this.wheels = options.wheels || 4; 
        this.doors = options.doors || 4; 
        this.color = options.color || 'blue'; 
    }
}
class Truck {
    constructor(options) {
        this.wheels = options.wheels || 12;
        this.doors = options.wheels || 2;
        this.color = options.color || 'red';
    }
}

class Factory {

    constructor(type) {
        this.type = type;
    }
}

create = (options) => {
    let vehicleType = this.type;
    let vehicle;

    if (vehicleType === 'car') {
        vehicle = new Car(options);
    } else if (vehicleType === 'truck') {
        vehicle = new Truck(options);
    } else if (vehicleType === 'bus') {
        vehicle = new Bus(options)
    }

}