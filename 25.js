//Write a program to take a binary array which contains 0 and 1, and print the maximum number of consecutive 1's in the array.

const input = require("readline-sync");
var n = input.questionInt("Enter the number the element: ");

var arr = [n];
for(let i = 0; i < n; i++){
    arr[i] = input.questionInt("Enter the binary number " + (i + 1) + ": ");
}
let b = 0;
for(let i = 0; i < n; i++){
    if(arr[i] == 1){
        let c = 1;
        for (let j = i + 1; j < n && arr[j] == arr[i]; j++){
            c++;
         }
         if(c > b){
            b = c;
         }
        }
    }
console.log(b);