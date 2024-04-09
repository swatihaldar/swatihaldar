/* Write a program to take two numbers as input each in a different array. Each digit of the number should be in an element in the array. 
calculate their product in another array such that each digit is stored as an array element and print the product. */

const input = require("readline-sync");
var n = input.questionInt("Enter elements of first array: ");

var arr1 = [];
for(let i = 0; i < n; i++){
   arr1.push(input.questionInt("Enter the number " + (i + 1) + ": "))
}
let p = 0;
for(let i = 0; i < n; i++){
    p = p * 10 + arr1[i];
}

var m = input.questionInt("Enter elements of second array: ");

var arr2 = [];
for(let i = 0; i < m; i++){
    arr2.push(input.questionInt("Enter the number " + (i + 1) + ": "))
}
let q = 0;
for(let i = 0; i < m; i++){
    q = q * 10 + (arr2[i]);
}
let r = p * q;
console.log(r);