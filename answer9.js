var number = parseInt(prompt("Please enter a number till you want the pattern to print: "));
for (let i = 0; i < number; i++) {
    let answer = "";
    for (let j = 0; j < i; j++) {
        answer += (j + 1 + " ");
    }
    console.log(answer);
}
