// Write a function secondLargest(arr) that returns the  second largest uniquenumber from an array. Example: [10, 5, 8, 10, 3] → 8 .

function secondLargest(arr){
    let unique = [...new Set(arr)];
    unique.sort((a,b) => b - a);
    return unique[1];
}
console.log(secondLargest([10,5,3,10,8]));