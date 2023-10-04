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