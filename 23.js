// print the frequency of every number.

const input = require("readline-sync");
var n = input.questionInt("Enter the number 0f element: ");

var arr = [];
for(let i = 0; i < n; i++){
    arr.push(input.questionInt("Enter the number " + (i + 1) + ": "))
}
for(let i = 0; i < n; i++){
    let f = 1;
    for(j = i+1 ; j < n; j++){
        if(arr[i] == arr[j]){
            for(k = j; k < n-1; k++){
                arr[k] = arr[k + 1];
            }
            n--;
            j--;
            f++;
        }
    }
    console.log(arr[i] + " - " + f)
}
