/*
    4 5 4 3 2
    3 4 5 4 3
    2 3 4 5 4
    1 2 3 4 5
*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let p = "";
let m = n + 1;
let k = n -1;
let c;

for (let i = 0; i < n; i++) {
   for (let j = 1; j <= m; j++) {
        for (let a = n - i; a <= m; a++) {
            p += a + " ";
            c = a;
            c =c - 1;
        }
        for (let b = 1; b <= k; b++) {
            p += c + " ";
            c--;
        }
        break;
    }
    p += "\n";
    k--;
}
console.log(p);