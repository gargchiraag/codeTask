function getArray(arr) {
    let size = parseInt(prompt("Enter the size of the array: "));
    console.log("Enter values for the array:");
    for (let i = 0; i < size; i++) {
        let value = parseInt(prompt("Enter a value: "));
        arr.push(value);
    }
}
function displayArray(arr) {
    console.log("Array elements:");
    console.log(arr.join(", "));
}
function main() {
    let myArray = [];
    getArray(myArray);
    displayArray(myArray);
}
main();
