// Write a menu driven program to do the basic mathematical operations such as
// addition, subtraction, multiplication and division

class Calculator {
    constructor(num1, num2) {
        this.num1 = parseInt(num1);
        this.num2 = parseInt(num2);
    }
    callOper(char) {
        switch (char) {
            case '+':
                return this.num1 + this.num2;
                break;
            case '-':
                return this.num1 - this.num2;
                break;
            case '*':
                return this.num1 * this.num2;
                break;
            case '/':
                return this.num1 / this.num2;
                break;
            default:
                return -1;
                break;
        }
    }
}
var num1 = parseInt(prompt("Enter number 1: "));
var num2 = parseInt(prompt("Enter number 2: "));
var opr = prompt("Enter the operation you want to perform: ");
var c1 = new Calculator(num1, num2);
var result = c1.callOper(opr);
if (result === -1) {
    console.log("Invalid Operation!");
} else {
    console.log(result);
}
