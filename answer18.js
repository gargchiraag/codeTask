console.log("Enter the marks obtained: ");
var written = parseInt(prompt("Enter written test marks: "));
var lab = parseInt(prompt("Enter lab test marks: "));
var assignments = parseInt(prompt("Enter assignments test marks: "));

var grade = ((written * 70) + (lab * 20) + (assignments * 10)) / 100;
console.log("Grade of the student: " + grade);
