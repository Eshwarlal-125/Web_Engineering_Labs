// Write a function reverseWords(sentence) that reverses the order of words. Example:"I love JavaScript" → "JavaScript love I" .
function reverseWords(sentence){
    return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("I love JavaScript"));
// Second method...
function reverseWords(sentence) {
    let word = "";
    let result = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] === " ") {
            result += word + " ";
            word = "";
        } else {
            word = sentence[i] + word;
        }
    }
    result += word;
    return result;
}
console.log(reverseWords("I love JavaScript"));