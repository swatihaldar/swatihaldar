//Merging of two array into a single sorted array.

const input = require("readline-sync");
var n = input.questionInt("Enter elements of first array: ");

var arr1 = [];
for(let i = 0; i < n; i++){
    arr1[i] = input.questionInt("Enter the number " + (i + 1) + ": ");
}
var m = input.questionInt("Enter elements of second array: ");

var arr2 = [];
for(let i = 0; i < m; i++){
    arr2[i] = input.questionInt("Enter the number " + (i + 1) + ": ");
}
let p = n + m;
let arr3 = [p];
let i = 0, j = 0, k = 0;
while(k < p){
    if(i < n && j < m){
        if (arr1[i] < arr2[j]){
            arr3[k] = arr1[i];
            i++;
        }else {
            arr3[k] = arr2[j];
            j++;
        }
    } else if (i < n) {
        arr3[k] = arr1[i];
        i++;
    } else if (j < m) {
        arr3[k] = arr2[j];
        j++;
    }
    k++;
}

for(let k = 0; k < p; k++){
    console.log(arr3[k]);
}
