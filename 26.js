//Merging of two array into a single sorted array

const input = require("readline-sync");
var n = input.questionInt("Enter elements of first array: ");

var arr1 = [n];
for(let i = 0; i < n; i++){
    arr1[i] = input.questionInt("Enter the number " + (i + 1) + ": ");
}
var m = input.questionInt("Enter elements of second array: ");

var arr2 = [m];
for(let i = 0; i < m; i++){
    arr2[i] = input.questionInt("Enter the number " + (i + 1) + ": ");
}
let marr = [];
let i = 0, j = 0;
while(i < n && j < m){
    if (arr1[i] < arr2[j]){
    marr.push(arr1[i]);
    i++;
} else {
    marr.push(arr2[j]);
    j++;
}
}
while (i < n ){
    marr.push(arr1[i]);
    i++;
}
while(j < m){
    marr.push(arr2[j]);
    j++;
}
console.log(marr.join(" "));