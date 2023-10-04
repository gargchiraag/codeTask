// Write a program to multiply the adjacent values of an array and store it in an another
// array
// Program should accept an array
// Multiply the adjacent values
// Store the result into another array

var size = parseInt(prompt("Enter Array limit: "));
var array = [];
var result = [];
for (let i = 0; i < size; i++) {
    var num = parseInt(prompt("Enter a number: "));
    array.push(num);
}
for (let i = 1; i < size; i++) {
    var num = array[i - 1] * array[i];
    result.push(num);
}

console.log("Resulted Array: " + result.join(", "));
