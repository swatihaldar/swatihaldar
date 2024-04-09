/* Take a number N from the user as input and repeatedly find the sum of the digits of the number till you get a single digit. 
Print that digit. Example: 678 -> 6+7+8 = 21 -> 2+1 = 3 */

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let s;

while(n >= 10){
    s = 0;
    while(n != 0){
    let r = n % 10;
    n = Math.floor(n / 10);
    s += r;
    }
    n = s;
}
console.log(s);
