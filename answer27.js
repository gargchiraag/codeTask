// Given a variable named my_height, you must throw errors under the following
// conditions:
// notANumberError- When my_heightis NaN
// HugeHeightError – When my_heightis greater than
// TinyHeight Error - When my_heightis less than

var my_height = parseInt(prompt("Enter Height: "));
function checkHeight(height) {
    if (isNaN(height)) {
        throw new Error("notANumberError");
    } else if (height > 100) {
        throw new Error("hugeHeightError");
    } else if (height < 20) {
        throw new Error("tinyHeightError");
    } else {
        console.log(`Your Height is ${height}`);
    }
}
try {
    checkHeight(my_height);
} catch (error) {
    console.log("Error: " + error.message);
}
