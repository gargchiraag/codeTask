// Given a variable named my_string, try reversing the string using
// my_string.split().reverse().join() and then print the reversed string to the console. If the try
// clause has an error, print the error message to the console. Finally, print the typeof of the
// my_string variable to the console.

var my_string = prompt("Enter string of your choice: ");
if (typeof my_string === "string") {
    my_string = my_string.split(" ").reverse().join(" ");
    console.log(my_string);
    console.log(`Type of my_string is ${typeof my_string}`);
} else {
    console.log('Error');
    console.log(`Type of my_string is ${typeof my_string}`);
}
