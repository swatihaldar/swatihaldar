//print the greater number of the three numbers

const input = require("readline-sync");
var a = input.questionInt("enter the first number:");
var b= input.questionInt("enter the second number:");
var c = input.questionInt("enter the third number:");


if ( a > b){
    m = a; 
    n = b;
}
  else {
      m = b; 
      n = a ;
  }
if (m > c){
    console.log("The maximum number is: " + m);
}  
else {
    console.log ("The maximum number is: " + c);
}