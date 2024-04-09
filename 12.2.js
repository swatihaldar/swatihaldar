/*

* 
* * * 
* * * * * 
* * * * * * * 
* * * * * 
* * * 
* 

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let p ="";

for(let i=1; i<=n; i++){
    let a = 2*i-1;
    for(let j=1; j<=a; j++){
        p += "* ";
    }
    p += "\n"
}
 for(let i=n-1; i>=1; i--){
    let a = 2*i-1;
    for(let j=1; j<=a; j++){
        p += "* ";
    }
    p += "\n"
}
console.log(p);