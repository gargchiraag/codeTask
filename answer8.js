var number=parseInt(prompt("Please enter a number: "));
console.log("Sum of all odd number till "+ number + " is: ")
let sum=0;
for (let i=1;i< number;i=i+2){
sum+=parseInt(i);
}
console.log(sum);