// Lets create very basic constructors that define properties and methods for a custom onject 

// using constructor function 

function User(firstName, lastName, emailID, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.emailID = emailID;
    this.age = age;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

var user1 = new User('Ramesh', 'Fadatare', 'ramesh@gmail.com', 29);
var user2 = new User('Emily', 'Rose', 'emily@gmail.com', 20);
var user3 = new User('John', 'Ross', 'john@gmail.com', 35);

//Print objects 
console.log(user1);
console.log(user2);
console.log(user3);

// access properties 
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);

// calling method 
console.log(user1.getFullName());

// This example above is a simple example of the constructor pattern but it does not suffer from problems. One is that it makes inheritance difficult and the other is that functions such as getFullName() are redefined for each of the new objects created using the User constructor. This isn't very optimal as the function should ideally be shared between all of the instances of the User type. 

// Solution

// use constructor function 
function User(firstName, lastName, emailID, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailID = emailID;
    this.age = age;
}

// We extend the function's prototype 
User.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName; 
}

var user1 = new User('Ramesh', 'Fadatare', 'ramesh@gmail.com', 29);
var user2 = new User('Emily', 'Rose', 'emily@gmail.com', 20);
var user3 = new User('John', 'Ross', 'john@gmail.com', 35);

// access properties 
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);

// calling method 
console.log(user1.getFullName());