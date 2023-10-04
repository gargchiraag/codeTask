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
