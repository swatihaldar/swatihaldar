/*

4
4 3 4
4 3 2 3 4
4 3 2 1 2 3 4
4 3 2 3 4
4 3 4
4

*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number:");
let p ="";

for(let i=1; i<=n; i++){
    let b=n;
    for(let j=1; j<=i; j++){
        p += b + " ";
        b--;
        c=b;
    }
    for(let c=b+2; c<=n; c++){
         p += c + " ";
    }
    p += "\n";
}
for(let i=n-1; i>=1; i--){
    let b=n;
    for(let j=1; j<=i; j++){
        p += b + " ";
        b--;
        c=b;
    }
    for(let c=b+2; c<=n; c++){
         p += c + " ";
    }
    p += "\n";
}
console.log(p);