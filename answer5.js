// Write a program to show the grade obtained by a student after he/she enters their total
// mark percentage.

for (let i=0;i<6;i++){
    var marks=parseInt(prompt ("Please enter marks obtained: "));
    if(marks>=90){
    console. log("A");
    }
    else if (marks>=80){
    console.log("B");
    }
    else if(marks>=70){
    console.log("C");
    }
    else if (marks>=60){
        console.log("D");
    }
    else if (marks>=50){
    console. log("E");
    }
    else {
    console. log("Failed!");
}
}
