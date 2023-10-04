// Write a program to add the values of two 2D arrays
// Program should contains 3 functions including the main function

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
            result[i][j] = array1[i][j] + array2[i][j];
        }
    }
    return result;
}
function displayArray(array, size) {
    for (let i = 0; i < size; i++) {
        console.log(array[i].join(" "));
    }
}
function main() {
    var array1 = getArray();
    var array2 = getArray();
    var resultArray = addArray(array1, array2, 2);
    displayArray(resultArray, 2);
}
main();
