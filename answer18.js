// Grades are computed using a weighted average. Suppose that the written test
// counts 70%, lab exams 20% and assignments 10%
// Write a program to find the grade of a student during his academic year.
// Program should accept the scores for written test, lab exams and assignments

console.log("Enter the marks obtained: ");
var written = parseInt(prompt("Enter written test marks: "));
var lab = parseInt(prompt("Enter lab test marks: "));
var assignments = parseInt(prompt("Enter assignments test marks: "));

var grade = ((written * 70) + (lab * 20) + (assignments * 10)) / 100;
console.log("Grade of the student: " + grade);
