//right to left rotation

const input = require("readline-sync");
var n = input.questionInt("Enter the number of element: ");

var arr = [n];
for(let i = 0; i < n; i++){
    arr[i] = input.questionInt("Enter the number " + (i + 1) + ": ");
}
let l = input.questionInt("Enter the number of rotation: ")

for(let i = 0; i < l-1; i++){
    t = arr[0];
    for(let j = 0; j < n-1; j++){
        arr[j] = arr[j+1];
    }
    arr[n-1]=t;
}
console.log(arr)