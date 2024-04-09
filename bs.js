//Bubble sort 
//worst/average case = O(N^2), best case = O(N)

const input =  require("readline-sync");
let n = input.questionInt("Enter the length of array: ");

let arr = [];
for(let i = 0; i < n; i++){
    arr.push(input.questionInt("Enter the number " + (i+1) + ": "))
}

for(let i = n-1; i >= 0; i--){
    let swap = true;
    for(let j = 0; j <= i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            swap = false;
        }
    }
    if(swap == true){
        break;
    }
}
console.log(arr);