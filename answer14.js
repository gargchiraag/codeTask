// Write a program to add to two dimensional arrays
// Program should accept two 2D arrays and display its sum

var array1 = [];
var array2 = [];
var array3 = [];
var size = parseInt(prompt("Enter size of arrays: "));
console.log("Array 1");
for (let i = 0; i < size; i++) {
    array1[i] = [];
    for (let j = 0; j < size; j++) {
        var number = parseInt(prompt("Enter the number "));
        array1[i][j] = number;
    }
}

console.log("Array 2");
for (let i = 0; i < size; i++) {
    array2[i] = [];
    for (let j = 0; j < size; j++) {
        var number = parseInt(prompt("Enter the number "));
        array2[i][j] = number;
    }
}
for (let i = 0; i < size; i++) {
    array3[i] = [];
    for (let j = 0; j < size; j++) {
        array3[i][j] = array1[i][j] + array2[i][j];
    }
}

console.log("Array 3:");
for (let i = 0; i < size; i++) {
    var arr = "";
    for (let j = 0; j < size; j++) {
        arr += array3[i][j] + " ";
    }
    console.log(arr);
}
