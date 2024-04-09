/* array = [2, 3, 5, 2, 1]
>>
>>>
>>>>>
>>
>
*/

const input = require("readline-sync");
var n = input.questionInt("Enter the number of element: ");                   

var arr = [];
for(let i = 0; i < n; i++){
    arr.push(input.questionInt("Enter the number " + (i + 1) + ": "));
}
let p = "";

for(let i = 0; i < n; i++){
    for(let j = 1; j <= arr[i]; j++){
      p += ">";
    }
    p += "\n";
}
console.log(p);