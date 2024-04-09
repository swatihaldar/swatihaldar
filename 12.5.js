/*  0 0 0 0 0
    x 0 0 0 x
    x x 0 x x
    x 0 0 0 x
    0 0 0 0 0  */

const input = require("readline-sync");
var n = input.questionInt("Enter the number: ");

for (let i = 0; i < n; i++) {
    let s = "";
    for (let j = 0; j < n; j++) {
        if (i == j || j == n - 1 - i) {
            s += "0 ";
        } else if (j > i && j < n - 1 - i) {
            s += "0 ";
        } else if (j < i && j > n - 1 - i) {
            s += "0 ";
        } else {
            s += "x ";
        }
    }
    console.log(s);
}
