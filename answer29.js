// Write a myFilter function that takes 2 parameters: myArray and callback. Here,
// myArray is an array of numbers and callback is a function that takes the elements of
// myArray as its parameter and returns a boolean true if the sum of the number is even or
// false if the sum of the number is odd.
// The myFilter function should return the sum of the array.

function myFilter(array, isEven) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(`Array Sum is: ${sum}`);
    console.log(isEven(array));
}
function isEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if(sum%2===0){
        return true;
    }
    return false;
}
var arr = [1, 2, 3, 4, 5];
myFilter(arr, isEven);
