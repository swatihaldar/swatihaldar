/*

* * * *
* *
* *
*
* *
* *
* * * *

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let p="";

for(let i=n; i>=1; i--){
    if(i == 1 || i == n ){
        for(let j=1; j <= i; j++)
        p += "* ";
    }
    else{
        for(let k=1; k<=2; k++){
            p += "* ";
        }
    }
    p += "\n";
}
for(let i=2; i<=n; i++){
    if(i == n ){
        for(let j=1; j <= i; j++)
        p += "* ";
    }
    else{
        for(let k=1; k<=2; k++){
            p += "* ";
        }
    }
    p += "\n";
}
    console.log(p);