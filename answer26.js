var my_string = prompt("Enter string of your choice: ");
if (typeof my_string === "string") {
    my_string = my_string.split(" ").reverse().join(" ");
    console.log(my_string);
    console.log(`Type of my_string is ${typeof my_string}`);
} else {
    console.log('Error');
    console.log(`Type of my_string is ${typeof my_string}`);
}
