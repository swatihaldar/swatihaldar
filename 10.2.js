// X-(X^3)/3+(X^5)/5-(X^7)/7+(X^9)/9-.... upto N terms


const input = require("readline-sync");
var x = input.questionInt("x = ");
var n = input.questionInt("n = ");
 let i = 1;
 let a = x;
 let d = 1;
 let s1 = 0;
 let s2 = 0;
 
 while (i <= n){
     if(i % 2 == 0){
         s2 +=(a/d); 
     }
     else{
         s1 += (a/d);
     }
     a = a*x*x;
     d +=2;
     i +=1;
 }
 s = s1 - s2;
 console.log(s);