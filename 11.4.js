/*

1
2 3
4 5 6
7 5 9 10

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");

let a = 1;
for (let i=1; i<=n; i++){
    let p = "";
    for(let j=1; j<=i; j++){
        p += a + " ";
        a++;
    }
    console.log(p);
}
