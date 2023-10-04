// Write a program to sort an array in descending order
// Program should accept and array, sort the array values in descending order and display it

var size = parseInt(prompt("Enter size of array"));
var array = [];
for (let i = 0; i < size; i++) {
    var num = parseInt(prompt("Enter the element"));
    array.push(num);
}
array.sort((a, b) => {
    return b - a;
});
console.log("Sorted array in descending order: " + array.join(", "));
