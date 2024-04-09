
/*   4_4_3_2
     3_4_3
     2_4
     1
     2_4
     3_4_3
     4_4_3_2   */

const input = require("readline-sync");
var n = input.questionInt("Enter the number: ");

let str = "";


for(let i = n; i > 0; i--){
    for(let j = i; j <= i; j--){
        if(j == i){
            str += j + "";
        }
        for(let b = n; b > n -(i-1); b--){
            str += "_" + b + "";
        } break;
    }
     str += "\n"
}
for(let i = 2; i <= n; i++){
    for(let j = i; j <= i; j--){
        if(j == i){
            str += j + "";
        }
        for(let b = n; b > n -(i-1); b--){
            str += "_" + b + "";
        } break;
    }
     str += "\n"
}
console.log(str);