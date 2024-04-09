//Selection sort (O(N^2))

const input =  require("readline-sync");
var n = input.questionInt("Enter the length of array: ");

let arr = [];
for(let i = 0; i < n; i++){
    arr.push(input.questionInt("Enter the number " + (i + 1) + ": "))
}

for(let i = 0; i < n-1; i++){
    let min = i;
    for(let j = i; j <= n-1; j++){
        if(arr[j] < arr[min]){
            let temp = arr[min];
            arr[min] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);