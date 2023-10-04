class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }
    square(side) {
        return side * side;
    }
    rectangle(length, breadth) {
        return length * breadth;
    }
    triangle(base, height) {
        return (base * height) / 2;
    }
}
class MyClass extends Area {
    constructor() {
        super();
        this.areaCal = new Area();
    }
    main() {
        console.log("Enter your choice: \nCircle\nSquare\nRectangle\nTriangle");
        var choice = parseInt(prompt("Enter your choice number: "));
        switch (choice) {
            case 1:
                var radius = parseInt(prompt("Enter Radius: "));
                var areaCircle = this.areaCal.circle(radius);
                console.log(`Area of circle is ${areaCircle}`);
                break;
            case 2:
                var side = parseInt(prompt("Enter Side: "));
                var areaSquare = this.areaCal.square(side);
                console.log(`Area of Square is ${areaSquare}`);
                break;
            case 3:
                var length = parseInt(prompt("Enter Length: "));
                var breadth = parseInt(prompt("Enter Breadth: "));
                var areaRectangle = this.areaCal.rectangle(length, breadth);
                console.log(`Area of Rectangle is ${areaRectangle}`);
                break;
            case 4:
                var base = parseInt(prompt("Enter Base: "));
                var height = parseInt(prompt("Enter Height: "));
                var areaTriangle = this.areaCal.triangle(base, height);
                console.log(`Area of Triangle is ${areaTriangle}`);
                break;
            default:
                console.log("Invalid Input!");
                break;
        }
    }
}
var obj = new MyClass();
obj.main();
