/*  
        * 
      * * 
    * * * 
  * * * * 
* * * * *     */

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let p = "";

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n-i; j++){
        p += "  ";
    }
    for(let a = 1; a <= i; a++){
        p += "* ";
    }
    p += "\n";
} 
console.log(p);