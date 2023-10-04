// Write a program to find the sum of all the odd numbers for a given limit
// Program should accept an input as limit from the user and display the sum of all the odd
// numbers within that limit
var number=parseInt(prompt("Please enter a number: "));
console.log("Sum of all odd number till "+ number + " is: ")
let sum=0;
for (let i=1;i< number;i=i+2){
sum+=parseInt(i);
}
console.log(sum);