/*    1 2 3
      8 9 4
      7 6 5    */

const input = require("readline-sync")
var n = input.questionInt("Enter the number: ");

let a = 1;
let r1 = 0, c1 = 0, r2 = n - 1, c2 = n - 1;

var arr = [];
for (let i = 0; i < n; i++) {
  arr.push([]);
  for (let j = 0; j < n; j++){}
}

while (a <= n * n) {
  for (let i = c1; i <= c2; i++) {
    arr[r1][i] = a;
    a++;
  }
  r1++;
  for (let i = r1; i <= r2; i++) {
    arr[i][c2] = a;
    a++;
  }
  c2--;
  for (let i = c2; i >= c1; i--) {
    arr[r2][i] = a;
    a++;
  }
  r2--;
  for (let i = r2; i >= r1; i--) {
    arr[i][c1] = a;
    a++;
  }
  c1++;
}

for (let i = 0; i < n; i++) {
  let l = "";
  for (let j = 0; j < n; j++) {
    l += arr[i][j] + " ";
  }
  console.log(l);
}
