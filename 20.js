/* Write a program to take N numbers from a user as input and then take another number from the user M, and a number X from the user to be inserted
 at the Mth location in the array. Print the final array.
*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number the element: ");

var arr = [n];
for(let i = 0; i < n; i++){
    arr[i] = input.questionInt("Enter the number " + (i + 1) + ": ");
}
let m = input.questionInt("Enter the position of element to delete: ");
let x = input.questionInt("Enter the number added: ")

for(let i = 0; i < n; i++){
    arr[m-1] = x;
}

console.log(arr);