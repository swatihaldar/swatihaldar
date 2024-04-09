/*

0
2 4
4 8 8
8 16 16 16

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let p="";
console.log("0");

for(let i=1; i<n; i++){
    for(let j=0; j<1; j++){
        k=2**i;
        p+=k+" ";
    }
    b=k*2;
    for(let a=1; a<=i; a++){
        p+=b+" ";
    }
    p+="\n";
}
console.log(p);