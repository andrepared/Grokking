// Singleton object is implemented as an immediate anonymous function. The function executes immediately by wrapping it in brackets followed by two additional brackets. It is called anonymous because it does not have a name. 

// At one point, you may want Global State inside your React Apps. 
// Singleton tells us that we can create one instance of a class and that instance can be accessed globally. It makes sure that the class acts as a single source of entry for all the consumer components that want to access this state. In other words, it procides a cmmon entry point for using global state.
// It should : ensure that it creates only one instance of the class 
// Provides a golbal access opoint to the state. 
// Makes sure that the instance is only created the first time. 

var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    //The getInstance method is the patterns gatekeeper. It retuns the one and only instance of the onject while maintaining a private reference to it which is not accessible to the outside world.
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
// The getInstance method demonstrates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary
function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}
// Singleton is a manifestation of a common JS pattern. Module pattern. Module is the basis to all popular JS libraries and frameworks (jQuery, Backbone, Ember)