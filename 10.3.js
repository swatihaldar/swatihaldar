//X-(X^3)/3!+(X^5)/5!-(X^7)/7!+ .... upto N terms

const input = require("readline-sync");
var x = input.questionInt("x = ");
var n = input.questionInt("n = ");
 let i = 1;
 let a = x;
 let d = 1;
 let s1 = 0;
 let s2 = 0;
 let f = 1;
 
 while (i <= n){
     if(i % 2 == 0){
         s2 +=(a/d); 
     }
     else{
         s1 += (a/d);
     }
     a = a*x*x;
     d = d*(f+1)*(f+2);
     f +=2;
     i +=1;
 }
 s = s1 - s2;
 console.log(s);