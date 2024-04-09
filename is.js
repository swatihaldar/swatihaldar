//Insertion sort
//worst/average case = O(N^2), best case = O(N)     

const input =  require("readline-sync");
let n = input.questionInt("Enter the length of array: ");

let inputstr = input.question("Enter " + n + " numbers seperated by space: ")
let arr = inputstr.split(" ")
arr = arr.slice(0,n)

for(let i = 0; i < n; i++){
    arr[i] = parseInt(arr[i]);
}

for(let i = 1; i < n; i++){
    let temp = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > temp){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = temp;
}
console.log(arr);

