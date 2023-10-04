// Write a program to find the simple interest.
// Program should accept 3 inputs from the user and calculate simple interest for the given
// inputs
var amount=parseInt(prompt("Please enter amount: "));
var interest=parseInt(prompt("Please enter interest: "));
var year=parseInt(prompt("Please enter number of year: "));
var simpleInterest=(amount*interest*year) /100;
console.log("Interest Amount you'll recieve on " + amount +" is" + simpleInterest);