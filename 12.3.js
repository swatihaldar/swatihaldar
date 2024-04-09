/*

* *
** **
*** ***
********
*** ***
** **
* *

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number: ");
let p = "";

 for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        p += "*";
    }
    if(i != n){
        p += " ";
    }
    for(let k = 1; k <= i; k++){
        p += "*";
    }
    p += "\n";
 }
 for(let i = n-1; i >=1; i--){
    for(let j = 1; j <= i; j++){
        p += "*";
    }
    if(i != n){
        p += " ";
    }
    for(let k = 1; k <= i; k++){
        p += "*";
    }
    p += "\n";
 }
 console.log(p);