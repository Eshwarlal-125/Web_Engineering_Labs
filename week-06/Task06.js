// Write a function countCharacters(str) that returns an object containing the frequency of each character. Example:  "aabbc" → {a: 2, b: 2, c: 1} .

function countCharacters(str) {
    let count = {};
    for (let char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}
console.log(countCharacters("aabbc"));