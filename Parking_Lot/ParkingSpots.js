//Enumertaion 
// JS does not support enumerations,so we will be using the Object.freeze() method as an alternative that freezes an object and prevents further modifications. 
const PaymentStatus = Object.freeze({
    COMPLETED,
    FAILED,
    PENDING,
    UNPAID,
    REFUNDED
});

const AccountStatus = Object.freeze({
    ACTIVE,
    CLOSED,
    CANCELED,
    BLACKLISTED,
    NONE
});

// Custom Person data type class 
class Person {
    #name;
    #address; 
    #email; 
    #phone

    
    construtor(name, address, email, person) {
        this.#name = name;
        this.#address = address;
        this.#email = email;
        this.#person = person;
    }
}

// Custom Address data type class 
class Address {
    #zipCode;
    #address;
    #city;
    #state;
    #country;

construtor(zipCode, address, city, state, country) {
    this.#zipCode = zipCode;
    this.#city = city;
    this.#state = state;
    this.#country = country;
    this.#address = address;
    }
}

// Definition for the constants *


// ParkingSpot class that will act as a base class for four different types of parking spots; handicapped, compact, large, and motorcycle. This will have an instanec of the Vehicle class. The definition of the ParkingSpot class and the classes being derived from it are:

//ParkingSpot is an Abstract class 
class ParkingSpot {
    #id;
    #isFree;
    #vehicle;
    constructor(id, isFree, vehicle) {
        if (this.constructor == ParkingSpot) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        else {
            this.#id = id;
            this.#isFree = isFree;
            this.#vehicle = vehicle; // Refers to an instance of the Vehicle Class
        }
    }
    getIsFree() { }
    // vehicle here refers to an instance of the Vehicle Class
    assignVehicle(vehicle) { }
    removeVehicle() { }
}

class HandcappedSpot extends ParkingSpot {
// vehicle here refers to an instance of the Vehicle Class
    assignVehicle(vehicle) {
    //definition
    }
}
class CompactSpot extends ParkingSpot {
// vehicle here refers to an instance of the Vehicle Class
    assignVehicle(vehicle) {
    //definition
    }
}
class LargeSpot extends ParkingSpot {
// vehicle here refers to an instance of the Vehicle Class
    assignVehicle(vehicle) {
    //definition
    }
}
class MotorcycleSpot extends ParkingSpot {
// vehicle here refers to an instance of the Vehicle Class
    assignVehicle(vehicle) {
    //definition
    }
}

//Vehicle is an Abstract Class 
class Vehicle {
    #licenseNo;
    constructor(licenseNo) {
        if (this.constructor == Vehicle) {
            throw new Error("Abstract class ca not be instantiated");
        }
        else {
            this.#licenseNo = licenseNo;
        }
    }
    // ticket here refers to instance of the ParkingTicket class 
    assignTicket(ticket) { }
}

class Car extends Vehicle {
// ticket here refers to instance of the ParkingTicket class 
    asignTicket(ticket) {
        //definition
    }    
}
class Van extends Vehicle {
// ticket here refers to instance of the ParkingTicket class 
    asignTicket(ticket) {
        //definition
    }    
}
class Truck extends Vehicle {
// ticket here refers to instance of the ParkingTicket class 
    asignTicket(ticket) {
        //definition
    }    
}
class MotorCycle extends Vehicle {
// ticket here refers to instance of the ParkingTicket class 
    asignTicket(ticket) {
        //definition
    }    
}
// -----------Vehicle and its child classes----------- //
// Account class is an Abstract class, which will have the actors, Admin and ParkingAttendant, as child classes. 

class Account {
    #username;
    #password;
    #status;
    #person;
    constructor(username, password, status, person) {
        if (this.constructor == Account) {
            throw new Error("Abstract classes can not be instatiate.");
        } 
        else {
            this.#username = username;
            this.#password = password;
            this.#status = status;
            this.#person = person;
        }
    }
    resetPassword() { }
}

class Admin extends Account {
// spot here refers to an instance of the ParkingSpot class 
    addParkingSpot(spot) { }
// displayBoard here refers to an instance of the DisplayBoard Class
    addDisplayBoard(displayBoard) { }
// entrance here refers to an instance of the Entrance class
    addEntrance(entrance) { }
// exit here refers to an instance in the Exit class
    addExit(exit) { }
    
    // will implement the functionality of this class 
    resetPassword() {
        //definition
    }
}
e
class ParkingAgent extends Account {
    processTicket(ticketNumber) { }

    // will implement the functionality of this class 
    resetPassword() {
        //definition
    }
}
// -------------- Account and its child classes -------------- //

// DisplayBoard class 
class DisplayBoard {
    #id;
    #handicapped;
    #compact;
    #large;
    #motorcycle;
    constructor(id, handicappedSpot, compactSpot, largeSpot, motorcycleSpot) {
            this.#id = id;
            this.#handicapped = handicappedSpot; // Refers to an instance of the Handicapped class
            this.#compact = compactSpot; // Referes to an instance of the Compact class
            this.#large = largeSpot; // Refers to an instance of the Large class
            this.#motorcycle = motorcycleSpot; // Refers to an instance of the MotorCycle class
        }
        // Member functions
        showFreeSlot() { }
    }
class ParkingRate {
        // Data Members 
    #id;
    #hours;
    #rate;
    constructor(id, hours, rate) {
        this.#id = id;
        this.#hours = hours;
        this.#rate = rate;
    }
    // Member function
    calculate() {}
}
// -------------- DisplayBoard and ParkingRate classes -------------- //

// Entrance and Exit 
// This section contains the Entrance and Exit classes, both of which are associated with the ParkingTicket class.

class Entrance {
// Data member
    #id;
    #ticket;
    constructor(id, ticket) {
        this.#id = id;
        this.#ticket = ticket; // Refers to an instance of the ParkingTicket class
    }
    
    // ticket here refers to an instance of the ParkingTicket class
    getTicket(ticket) { }
}

class Exit {
// Data members
    #id;
    #ticket;
    constructor(id, ticket) {
        this.#id = id;
        this.#ticket = ticket; 
    }
    validateTicket(ticket) { }
} 

// -------------- End of Entrance & Exit classes -------------- //
// Parking Ticket 
// The definition of the ParkingTicket class contains instance of Vehicle, Payment, Entrance, and Exit

class ParkingTicket {
    #ticketNo;
    #timeStamp;
    #exit;
    #amount;
    #payment;
    #vehicle;
    #entrance;
    #exitIns;
    #status;
    
    constructor(ticketNo, timeStamp, exit, exitIns, amount, payment, vehicle, entrance, status) {
        this.#ticketNo = ticketNo;
        this.#timeStamp = timeStamp;
        this.#exit = exit; 
        this.#amount = amount;
        
        // Following are the instance of their respective classes
        this.#exitIns = exitIns;
        this.#payment = payment;
        this.#vehicle = vehicle;
        this.#entrance = entrance; 
        this.#status = status;
    }
    
}
// -------------- End of the ParkingTicket class -------------- //

// Payment 
// Another abstract class, with the cash and creditCard classes as it child. THis take the PaymentStatus enumeration and the dateTime data type to keep track of the payment status and time. 

class Payment {
    #amount;
    #status;
    #timeStamp;
    constructor(amount, status, timeStamp) {
        if (this.constructor == Payment) {
            throw new Error("Abstract classes can not be instantiated");
        } 
        else {
            this.#amount = amount;
            this.#status = status; // Refers to the PaymentStatus enum
            this.#timeStamp = timeStamp;
        }
    
    }
    initiatedTransaction() { }
}
class Cash extends Payment {
    initiatedTransaction() {
    // definition
    }
}
class CreditCard extends Payment {
    initiatedTransaction() {
    //definition
    }
}
// -------------- End of Payment and its derived classes -------------- //

//ParkingLot Class 
// The final class of the parking lot system is PaarkingLot, which will be a Singleton class, meaning the entire system will only have instance of this class. 

class ParkingLot {
    #id;
    #name;
    #address;
    #parkingRate;
    constructor(id, name, address, parkingRate) {
        if (ParkingLot._instance) {
            throw new Error("Singleton classes can not be instantiated more than once")
        }
        // The ParkingLot is a singleton class that ensures it will have only one active instance at a time both the Entrance and Exit classes use this class to create and close parking tickets
        ParkingLot._instance = this;
        
        // call the name, address, parking_rate elements of the customer in the parking lot from the database
        this.#id = id;
        this.#name = name;
        this.#address = address;
        this.#parkingRate = parkingRate;
        
        // create initial entrance and exit hasmaps repectively
        this.entrance = new Map();
        this.exit = new Map();
        
        // create a hashmap that identifies all currently generated tickets using their ticket number 
        this.tickets = new Map();
    }
    // Created a staic method to access the singleton instance of ParkingLot
    static getInstance() {
        if (!ParkingLot._instance) {
            return new ParkingLot();
        }
        return ParkingLot._instance;
    }
    // entrance here refers to an instance of the Entrance class
    addEntrance(entrance) { }
    //exit here refers to an instance of the Exit class
    addExit(exit) { }
    // This funtion allows parking tickets to be available at multiple entrance 
    //vehicle here referes to an instance of the Vehicle class
    // Return a ParkingTicket instance
    getParkingTicket(vehicle) { }
    
    // type here refers to an instance of the ParkingSpot class
    isFull(type) {}
}