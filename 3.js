//Print the third max of 4 numbers

const input = require("readline-sync");
var a = input.questionInt("enter the first number:");
var b= input.questionInt("enter the second number:");
var c = input.questionInt("enter the third number:");
var d = input.questionInt("enter the fourth number:");

if (a < b){
    m1 = a;
    m2 = b;
}
else {
  m1 = b;
  m2 = a;
}
if (c < d){
    m3 = c;
    m4 = d;
}
else {
  m3 = d;
  m4 = c;
}
if (m1 < m3){
    m5 = m2;
    m6 = m3;
}
else {
    m5 = m4;
    m6 = m1;
}
if (m5 < m6){
    console.log("Third maximum number is:" + m5);
}
else{
    console.log("Third maximum number is:" + m6);
}