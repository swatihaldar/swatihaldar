//LCM & HCF

const input = require ("readline-sync");
var a = input.questionInt("Enter the number:");
var b = input.questionInt("Enter the number:");

let x = a;
let y = b;

while (a !== b){
    if (a > b){
        a = a - b;
    }
    else{
        b = b - a;
    }
}
let hcf = a;
console.log("HCF:",hcf);

let lcm = (x * y)/hcf;
console.log("LCM:",lcm);