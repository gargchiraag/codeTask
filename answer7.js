// Write a program to print the multiplication table of given numbers.
// Accept an input from the user and display its multiplication table

var number=parseInt (prompt("Please enter a number: ")); 
console.log("Table for "+ number +" is :");
for(let i=1;i<=10;i++){ 
    console.log(number +" * "+ i +" = " + number*i);
}