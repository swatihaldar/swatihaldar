//Write a program to take a number and print the count of the prime numbers that are strictly less than a number.

const input = require("readline-sync");
var n = input.question("Enter the number: ");
let a = 2;
let c = 0;

while(a < n){
    let p = 1;
    let b = 2;
    while(b <= a/2){
        if(a % b == 0){
            p = 0;
            break;
        }
        
        b++;
    }
    c += p;
    a++
}
console.log(c);
