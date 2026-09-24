// Write a function removeDuplicates(arr)that returns an array with duplicate valuesremoved. Example: [1, 2, 2, 3, 1] → [1, 2, 3] 
function removeDuplicates(arr){
    let unique = [... new Set(arr)];
    
    return unique
}
console.log(removeDuplicates([1,2,2,3,1]));
// second method...
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let duplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                duplicate = true;
                break;
            }
        }
        if (duplicate === false) {
            result[result.length] = arr[i];
        }
    }
    return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 1]));