// Find a contiguous subarray that adds to a given number S.

const input = require("readline-sync");
var n = input.questionInt("Enter the number of elements: " );
var s = input.questionInt("Enter the target: ");

var arr = []
for(let i = 0; i < n; i++){
    arr.push(input.questionInt("Enter the number " + (i + 1) + ": "));
}
let i = 0, j = 0, k = 0;
while(i < n && j < n){
    if(k < s){
        k += arr[i];
        i++
    } else if (k > s){
        k -= arr[j];
        j++
    } else {
        break;
    }
}
if (k == s){
    while(j < i){
        console.log(arr[j]);
        j++
    } 
  } else{
    console.log("No subarray found");
  }
  
    
