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
