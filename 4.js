//Palindrome number

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let s = 0;
let a = n;

while (n > 0){
    r = n % 10;
    s = s*10+r;
    n = Math.floor(n / 10);
}
if (a == s){
    console.log("Palindrome number")
}
else{
    console.log("Not Palindrome number")
}