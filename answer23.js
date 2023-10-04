// Write an object oriented program to store and display the values of a 2D array
// Program should contains 3 functions including the main function
// main()
// Declare an array
// Call function getArray()
// Call function displayArray()

function getArray() {
    var size = parseInt(prompt("Enter size of array: "));
    var array = [];
    console.log("Enter Elements in array: ");
    for (let i = 0; i < size; i++) {
        array[i] = [];
        for (let j = 0; j < size; j++) {
            var num = parseInt(prompt("Enter a number: "));
            array[i].push(num);
        }
    }
    return array;
}
function addArray(array1, array2, size) {
    var result = [];
    for (let i = 0; i < size; i++) {
        result[i] = [];
        for (let j = 0; j < size; j++) {
            result[i].push(array1[i][j] + array2[i][j]);
        }
    }
    return result;
}
function displayArray(array, size) {
    console.log("Array Elements are:");
    for (let i = 0; i < size; i++) {
        console.log(array[i].join("\n"));
    }
}
function main() {
    var array1 = getArray();
    displayArray(array1, 3);
}
main();
