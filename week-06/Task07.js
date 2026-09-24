// Write a function longestWord(sentence) that finds the longest word in a sentence

function longestWord(sentence) {
    let word = "";
    let longest = "";
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length) {
            if (word.length > longest.length) {
                longest = word;
            }
            word = "";
        } else {
            word = word + sentence[i];
        }
    }
    return longest;
}
console.log(longestWord("I love JavaScript programming"));