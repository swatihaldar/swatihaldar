// prime  number

const input = require("readline-sync");
var n = input.questionInt("Enter the number: ");
var b = 0;

 let a = 2;
 
while (a < n){
    if (n % a == 0){
        b = 1;
        break;
    }
    else {
        a +=1;
    }
}
    if (b == 0){
        console.log("Prime number");
    }
    else {
        console.log("Not Prime number")
    }