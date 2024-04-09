//Write a program that rotates the elements of a list
// left to right rotation

const input = require("readline-sync");
var n = input.questionInt("Enter the number the element: ");

var arr = [n];
for(let i = 0; i < n; i++){
    arr[i] = input.questionInt("Enter the number " + (i + 1) + ": ");
}
let l = input.questionInt("Enter the number of rotation: ")

for(let i = 0; i < l; i++){
    t = arr[n-1];
    for(let j = n-1; j > 0; j--){
        arr[j] = arr[j-1];
    }
    arr[0]=t;
}

console.log(arr);
