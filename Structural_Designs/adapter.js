// Pattern translates one interface(an objects properties and methods) to another. Adapters allows programming components to work together that otherwise wouldnt because of mismatched interfaces. The Adapter pattern is also referred to the Wrapper Pattern 
// One scenario where Adapters are commonly used is when new components need to be integrated and work together wth existing components in the application 

// Another scenario is refactoring in which parts of the program are written with an improved interface, but the old code still ecpects the oroginal interface. 

// objects participating are: 
// Client, Adapter, and Adaptee 

//old interface 
function Shipping() {
    this.request = function (zipStart, zipEnd, weight) {
        //...
        return "$49.95";
    }
}

//new interface 

function AdvancedShipping() {
    this.login = function (credentials) { '/*---*/' };
    this.setStart = function (start) { '/*---*/' };
    this.setDestination = function (destination) { '/*---*/' };
    this.calculate = function (weight) { return '$39.50' };
}

// adapter interface 

function ShippingAdapter(credentials) {
    const shipping = new AdvancedShipping(); 
    
    shipping.login(credentials);
    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}
function run() {
    const shipping = new Shipping();
    const credentials = { token: '30a8-6ee1' };
    const adapter = new ShippingAdapter(credentials);
    
    //original shipping object and interface
    const cost = shipping.request('87801', '10010', '2 lbs');
    console.log("Old cost: " + cost);
    
    // new shipping object with adapter interface
    
    cost = adapter.request('87801', '10010', '2 lbs');
    
    console.log('New cost: ' + cost);

}