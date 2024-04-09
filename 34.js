// MAGIC SQUARE with odd numbers

const input = require("readline-sync");
var n = input.questionInt("Enter an odd number for Magic square: ");
if(n % 2 == 0){
    console.log("Please enter an odd number");
    n = input.questionInt("Enter an odd number for Magic square: ");
}
var arr = [];
for(let i = 0; i < n; i++){
    arr.push([]);
    for(let j = 0; j < n; j++){
        arr[i].push(0);
    }
}

let i = Math.floor(n / 2);
let j = n - 1;
let a = 1;

while(a <= n * n ){
    if (i == -1 && j == n){
        i = 0;
        j = n - 2;
    } else {
        if(j == n){
            j = 0;
        }
        if (i < 0){
            i = n - 1;
        }
    }
    if (arr[i][j] != 0) {
        j -= 2;
        i++;
    }
    arr[i][j] = a++;
    i--;
    j++;
}
for(let i = 0; i < n; i++){
    let magicsquare = "";
    for(let j = 0; j < n; j++){
        magicsquare += arr[i][j] + " ";
    }
    console.log(magicsquare);
}
