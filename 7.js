//Perfect number

const input = require("readline-sync");
var n = input.questionInt("Enter the number: ");
 
let i = 1;
let s = 0;

while (i < n){
    if (n % i == 0){
        s += i;
    }
    i += 1;
}
if (s == n){
    console.log("Perfect number");
}
else{
    console.log("Not a Perfect number");
}