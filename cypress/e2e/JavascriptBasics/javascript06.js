//Class Concept in Javascript
let m = 10;
let n = 20;
class Car {

  //Declare varibale in class
  static numberOfWheels = 4;
  numberofDoors = 4;
  variable1;
  //Constructor to initialize the object

  demo()
  {
    let a = 100;
    let b = 200;
    console.log(a+b);
  }
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
  }
}

// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(`Number of wheels: ${Car.numberOfWheels}`); // Output: Number of wheels: 4
console.log(`Number of doors: ${myCar.numberofDoors}`); // Output: Number of doors: 4
myCar.numberofDoors = 2; // Modifying the instance variable
    
// Accessing static variable
console.log(`Number of wheels: ${Car.numberOfWheels}`); // Output: Number of wheels: 4
// Using the method of the class
console.log(myCar.displayInfo()); // Output: Car: Toyota Corolla, Year: 2020

