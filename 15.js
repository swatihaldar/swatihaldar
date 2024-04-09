//Armstrong numbers

const input = require("readline-sync");
var m = input.questionInt("Enter the starting range: ");
var n = input.questionInt("Enter the ending range: ");

let arm = "";

for( let i=m; i<=n; i++){
    let s = 0;
    let t = i;
    let c = i.toString().length;
    
    while(t > 0){
        let a = t % 10;
        t = Math.floor(t / 10);
        s += Math.pow(a,c);
    }
    if (s === i){
        arm += s + " ";
        arm += "\n";
    }
}
console.log("Armstrong numbers are:" + "\n" + arm);
        
   
