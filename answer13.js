// Write a program to identify whether a string is a palindrome or not
// A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
// Program should accept a string and display whether the string is a palindrome or not

var str = prompt("Enter the string to check Palindrome or Not: ");
var ans = 1;
var length = str.length;
for (let i = 0; i < length / 2; i++) {
    if (str[i] != str[length - i - 1]) {
        ans = 0;
        break;
    }
}
if (ans) {
    console.log("Palindrome!");
} else {
    console.log("Not a Palindrome!");
}
