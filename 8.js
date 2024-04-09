// max & min

const input = require("readline-sync");
var n = input.questionInt("Enter the value of N: ");
var a = input.questionInt("Enter number 1: ");
var b = input.questionInt("Enter number 2: ");

let max, min;

if (a > b) {
    max = a;
    min = b;
} else {
    max = b;
    min = a;
}

for (let i = 2; i < n; i++) {
    const c = input.questionInt("Enter number " + (i + 1) + ": ");
    if (c > max) {
        max = c;
    } else if (c < min) {
        min = c;
    }
}

console.log("Maximum: " + max);
console.log("Minimum: " + min);
