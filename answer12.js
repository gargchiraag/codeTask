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
