var num = parseInt(prompt("Enter the number to check Prime or Not: "));
var check = 1;

if (num <= 1) {
    console.log("Entered Number is not a Prime Number");
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            check = 0;
            break;
        }
    }

    if (check) {
        console.log("Entered Number is a Prime Number");
    } else {
        console.log("Entered Number is Not a Prime Number");
    }
}

