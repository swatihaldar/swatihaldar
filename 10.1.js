//X+(X^2)/2+(X^3)/3+(X^4)/4 ....upto N terms

const input = require("readline-sync");
var x = input.questionInt("x = ");
var n = input.questionInt("n = ");

let i = 1;
let s = 0;
 while(i <= n){
     a = (x**i)/i;
     s += a;
     i += 1;
 }
 console.log(s);