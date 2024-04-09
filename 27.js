// Union and Intersection 

const input = require("readline-sync");
var n = input.questionInt("Enter elements of first array: ");

var arr1 = [];
for(let i = 0; i < n; i++){
    arr1.push(input.questionInt("Enter the number " + (i + 1) + ": "));
}
var m = input.questionInt("Enter elements of second array: ");

var arr2 =[];
for(let i = 0; i < m; i++){
    arr2.push(input.questionInt("Enter the number " + (i + 1) + ": "));
}
let uni = "", int = "";
let i = 0, j =0;

while(i < n && j < m){
    if(arr1[i] < arr2[j]){
        uni += arr1[i] + " ";
        i++;
    } else if (arr1[i] > arr2[j]){
        uni += arr2[j] + " ";
        j++;
    } else {
        uni += arr1[i] + " ";
        int += arr1[i] + " ";
        i++;
        j++;
    }
}
while(i < n){
    uni += arr1[i] + " ";
    i++;
}
while(j < m){
    uni += arr2[j] + " ";
    j++;
}
console.log("Union: " + uni);
console.log("Intersection: " + int);