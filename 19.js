/* Write a program to take N numbers from a user as input and store them in an array and then take another number from the user M, 
and delete the Mth element from the array. Print the final array.
*/

const input = require("readline-sync");
let n = input.questionInt("Enter the number of elements: ");

var arr=[];
for(let i = 0; i < n; i++){
    arr.push(input.questionInt("Enter the number " + (i + 1) + ": "));
}
let m = input.questionInt("Enter the position of the element to delete: ");

for(let i = m-1; i < n; i++){
    arr[i] = arr [i + 1];
}
n--;
for (let i = 0; i < n; i++){
    console.log(arr[i]);
}
