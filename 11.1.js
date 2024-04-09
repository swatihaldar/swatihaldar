/*

*
* *
* * *
* * * *
* * * * *

*/

// const input = require("readline-sync");
// var n = input.questionInt("Enter the number:");
// let s= "";

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         s += "* "
//     }
//     s += "\n"
// }
// console.log(s);

const input = require("readline-sync");
const n = input.questionInt("Enter the number:");

for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i));
}
