// Write a function findMissingNumber(arr)for an array containing numbers from 1 to n with one number missing. Example: [1, 2, 4, 5] → 3 

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = n * (n + 1) / 2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return total - sum;
}
console.log(findMissingNumber([1, 2, 4, 5]));