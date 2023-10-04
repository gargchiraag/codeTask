// Write a program to print the following pattern using for loop
// 1
// 2 3
// 4 5 6
// 7 8 9 10

var number = parseInt(prompt("Enter the number till you want to print the pattern: "));
var num = 1;
var pattern = 1;
while (num <= number) {
    var result = "";
    for (let j = 0; j < pattern; j++) {
        result += num + " ";
        num ++;
    }
    console.log(result);
    pattern++;
}