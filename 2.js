//print the greater number of the four numbers

const input = require("readline-sync");
var a = input.questionInt ("enter the first number:");
var b= input.questionInt ("enter the second number:");
var c = input.questionInt ("enter the third number:");
var d = input.questionInt ("enter the fourth number:");

if (a > b){
    m = a;
    n = b;
}
else {
    m = b;
    n = a;
}
if (c > d){
    x = c ;
    y = d;
}
else {
    x = d;
    y = c;
}
if (m > x){
    console.log("The greater number is:" + m);
}
else{
     console.log("The greater number is:" + x);
}
