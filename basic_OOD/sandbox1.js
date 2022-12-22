// Encapsulation


class Movie {

    // Constructor
    constructor(t = "", y = -1, g = "") {
        this.title = t;
        this.year = y;
        this.genre = g
    }


    // getters & setters 
    // create a get_title () method and so on... 

    get_title() {
        return this.title;
    }

    set_title(t) {
        this.title = t;
    }
    
    get_year() {
        return this.year;
    }
    
    set_year(y) {
        this.year = y;
    }
    
    get_genre() {
        return this.genre;
    }

    set_genre(g) {
        this.genre = g;
    }


    // print out details 

    print_details() {
        console.log("Title: ", this.title);
        console.log("Year: ", this.year);
        console.log("Genre: ", this.genre);

    }
}

const movie = new Movie("The Lion King", 1994, "Adventure");
movie.print_details();

console.log("-----");
movie.set_title("Forrest Gump");
console.log("New tile: ", movie.get_title());

//  Movie class has an interface with public methods for communication.
// The private members (variables or f(x)) cannot be accessed directly from the outside, but public read and write f(x)'s allow access to them, this, in essence, is Data Encapsulation. 

// Advantages 
// Classes are simpler to maintain and modify 
// Which data member we wish to keep hidden or accessible can be specified 
// Increase flexibility -- we choose which variables are read only and write only