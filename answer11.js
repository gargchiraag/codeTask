// Write a program to find the number of even numbers in an array
// Program should accept an array and display the number of even numbers contained in that
// array

var size = parseInt(prompt("Enter size of array "));
var array = [];
for (let i = 0; i < size; i++) {
    var num = parseInt(prompt("Enter the element"));
    array.push(num);
}
let evenNum = 0;
for (let i = 0; i < size; i++) {
    if (array[i] % 2 === 0) {
        evenNum++;
    }
}
console.log("Number of even elements in the given array is: " + evenNum);
