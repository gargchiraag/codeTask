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
