// Write a program to interchange the values of two arrays.
// Program should accept an array from the user, swap the values of two arrays and display it
// on the console

var array1=[];
var array2=[];
for (let i=0;i<5;i++){
    var num=parseInt (prompt("enter number for array 1 ")); 
    array1 [i]=num;
}
for (let i=0;i<5;i++){
var num=parseInt (prompt ("enter number for array 2 ")); 
array2[1]=num;
}
for (let i=0; 1<5;1++)
{
let sum =array1[i]+array2[i];
array1[i]=sum-array1 [i]; 
array2[i]=sum-array1[i];
}
let arr1="";
let arr2="";
for (let i=0;1<5;i++){
arr1+=(array1 [i]+" ");
arr2+=(array2[i]+" ");
}
console.log("Array 1 "+ arr1);
console. log("Array 2 "+ arr2)