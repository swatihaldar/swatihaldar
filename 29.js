/* Write a program to take an array of size N and a number K from the user as input, and print the elements of an array in a rotated manner with a gap of K.
 Eg, let us say the array is  3, 6, 7, 5, 10. And the value of k = 3. The output should be - 7, 3, 10, 6, 5. If k = 2, the output should be  6, 5, 3, 10, 7
 */
const input = require("readline-sync");
let n = input.questionInt("Enter the length of array: ");

let a = [n];
i = 0;

while ( i < n ){
let b = input.questionInt("Enter the number " + (i + 1) + ": ");
a[i] = b;
    i++;
}

let c = input.questionInt("Enter the number in which you have to rotated in manner with a gap of: ")
let d = [10000];

i = 0;
p = 0;
k = c;
s = c;

while ( i < n ){
    j = 0;
    while ( j < s ){
        j++;
    }
    j = j - 1;
    d[p] = a[j];
    a.splice(j,1);
    s = s -1;
    p++;
    s = s + k;

    if ( s > a.length ){
        s = s - a.length;
        i++;
    } else if ( s <= a.length ){

        i++;
    }

    if ( s > a.length){
        s = s - a.length;
    }
}

console.log(d);