//HCF

const input = require("readline-sync");
var n = input.questionInt("Enter the value of N: ");
var a = input.questionInt("Enter number 1: ");

let i = 2;

while(i <= n){
    var b = input.questionInt("Enter number " + i + ": ");
    if(a > b){
       t = a;
       a = b; 
       b = t;
    }
    while(b != 0){
        t = b;
        b = a % b;
        a = t;
    }
    hcf = a;
    i++
}
console.log("HCF:", hcf);