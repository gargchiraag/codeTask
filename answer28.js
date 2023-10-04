// Create a constructor function that satisfies the following conditions:
// The name of the constructor function should be Car.
// It should take three parameters: name, mileage and max_speed.
// Store these parameter values in their respective thiskeywords: this.name, this.mileage and
// this.max_speed.

class Car{
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }

    getData() {
        console.log(`Name: ${this.name}\nMileage: ${this.mileage}\nMax Speed: ${this.max_speed}`);
    }
}
var car = new Car("suzuki", 56, 200);
car.getData();
