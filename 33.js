//Addition of two Matrix.

const input = require("readline-sync");
var n = input.questionInt("Enter the number of rows: ");
var m = input.questionInt("Enter the number of columns: ");

var arr1 = [];
for (let i = 0; i < n; i++) {
    arr1[i] = [];
    for (let j = 0; j < m; j++) {
        arr1[i][j] = input.questionInt("Enter the number for matrix 1 [" + i + "][" + j + "]: ");
    }
}
var arr2 = [];
for (let i = 0; i < n; i++) {
    arr2[i] = [];
    for (let j = 0; j < m; j++) {
        arr2[i][j] = input.questionInt("Enter the number for matrix 2 [" + i + "][" + j + "]: ");
    }
}
var arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < m; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
}

for (let i = 0; i < n; i++) {
    let r = "";
    for (let j = 0; j < m; j++) {
        r += arr[i][j] + " ";
    }
    console.log(r);
}

