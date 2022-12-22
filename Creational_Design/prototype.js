//Prototype creates new objects but rather that creating non-initialized objects it returns onjects that are initialized with values it copied from a prototype. Also referenced as the Properties pattern. 

//Using Prototype: is useful in the initialization of business objects with values that match the default values in the database. The prototype object holds the default values that are copied over into a newly created business object. 
// JS uses this pattern in the construction of new objects and their prototypes. 

// Participants 
// Client : the example code: the run() function. 
    // -creates a new object by asking a prototype to clone itself

// Prototype -- in example code: CustomerPrototype 
    // - Creates an interface to clone itself

// Clones == in example code: Customer 
    // the cloned onjects that are being created

// CustomerPrototype object that clones objects given a prototype object. Its constructor accepts a prototype of type Customer. Calling the clone method will generate a new Customer object with its property values initialized with the protoype values. 
// Classical implementation of the Prototpye pattern, but JS can do this far more effectively using its built-in prototype facility. 

function CustomerPrototype(proto) {
    this.proto = proto;
    
    this.clone = function () {
        const customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;
        
        return customer;
    };
}

function Customer(first, last, status) {
    this.first = first; 
    this.last = last;
    this.status;
    
    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}
function run() {
    const proto = new Customer('n/a', 'n/a', 'pending');
    const prototype = new CustomerPrototype(proto);
    
    const customer = prototype.clone();
    customer.say();
}