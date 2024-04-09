// Find a number using the Binary Search algorithm.

const input = require("readline-sync");
var n = input.questionInt("Enter the number of element: ");

var arr = [];
for(let i = 0; i < n; i++){
   arr.push(input.questionInt("Enter the number " + (i + 1) + ": "));
}
var k = input.questionInt("Search the number: ");
let m;

let s = 0, e = n-1;
while(s <= e){
    m = Math.floor((s + e)/2);
    if(arr[m] != k){
        if(arr[m] > k){
            e = m -1;
        } else {
            s = m + 1;
        }
    } s++;
}
if (arr[m] == k){
    console.log("Yes");
} else {
    console.log("Not found");
}