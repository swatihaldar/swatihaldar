/*

* * * * *
* * * *
* * *
* *
*

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let s= "";

for(let i=n; i>=1; i--){
    for(let j=1; j<=i; j++){
        s += "* "
    }
    s += "\n"
}
console.log(s);