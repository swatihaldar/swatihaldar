//Pascal's triangle

const input = require("readline-sync");
var n = input.questionInt("Enter the number: ");
n = n + 1;

var tri = [];
for (let i = 0; i < n; i++) {
  tri.push([]);
  for (let j = 0; j <= i; j++) {
  }
}

for(let i = 0; i < n; i++){
    for(let j = 0; j <= i; j++){
        if(j == 0 || j == i){
            tri[i][j] = 1;
        } else {
            tri[i][j] = tri[i-1][j-1] + tri[i-1][j];
        }
    }
}

for(let i = 0; i < n; i++){
    console.log(tri[i]);
}

