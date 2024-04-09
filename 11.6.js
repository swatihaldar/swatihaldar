/*

1
1 2 1
1 2 3 2 1
1 2 3 4 3 2 1

*/

const input = require("readline-sync");
const n = input.questionInt("Enter the number: ");

for (let i = 1; i <= n; i++) {
    let p = "";
    for (let j = 1; j <= i; j++) {
        p += j + " ";
    }
    for (let a = i - 1; a >= 1; a--) {
        p += a + " ";
    }
    console.log(p);
}
