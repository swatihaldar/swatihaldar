// Second maximum number among the given set of N numbers.

const input = require("readline-sync");
var n = input.questionInt("Enter the value of N: ");
var a = input.questionInt("Enter number 1: ");
var b = input.questionInt("Enter number 2: ");

let i = 2;
if(a > b){
    m1 = a;
    m2 = b;
} else {
    m1 = b;
    m2 = a;
}

while(i < n){
    const c = input.questionInt("Enter number " + (i + 1) + ": ");
    if(c > m1){
        m2 = m1;
        m1 = c;
    } else if (c > m2){
        m2 = c;
    }
    i++;
}    
console.log("Second maximum number is: ", m2);