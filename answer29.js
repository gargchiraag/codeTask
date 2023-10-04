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
