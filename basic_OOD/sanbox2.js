// Abstraction


class Circle {
    // Define data attributes within the constructor
    constructor(radius = 0) {
        this.radius = radius;
        this.pi = 3.142;
    }
    // Define Methods 
    getArea() {
        return this.pi * Math.pow(this.radius, 2);
    
    }
    
    getParameter() {
        return 2 * this.pi * this.radius;
    }
};

const circle = new Circle(5); 
console.log('Area: ' + circle.getArea().toFixed(2));
console.log('Peremeter: ' + circle.getParameter().toFixed(2));
