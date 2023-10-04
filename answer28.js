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
