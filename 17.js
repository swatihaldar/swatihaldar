//print only the prime factors of a given number 'N'. Take N from the user as input.

const input = require("readline-sync");
var n = input.questionInt("Enter the number: ");
let f = "";
let d = 2;

while(n > 1){
    while(n % d == 0){
        n = n / d;
        f += d +" ";
    }
    d++;
}
console.log(f);