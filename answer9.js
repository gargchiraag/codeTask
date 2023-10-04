// Write a program to print the following pattern (hint: use nested loop)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var number = parseInt(prompt("Please enter a number till you want the pattern to print: "));
for (let i = 0; i < number; i++) {
    let answer = "";
    for (let j = 0; j < i; j++) {
        answer += (j + 1 + " ");
    }
    console.log(answer);
}
