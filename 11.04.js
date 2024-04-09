/*

1
2 3
4 5 6
7 5 9 10

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");

let i=1;
let a=1;
while(i<=n){
    let p ="";
    let j=1;
    while(j<=i){
        p +=a +" ";
        a++;
        j++;
    }
    console.log(p);
    i++;
}