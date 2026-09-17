// Activity B
function getInitials(name) {
    return name
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");
}
function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/\s/g, "");
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}
function countWords(text) {
    return text.trim().split(/\s+/).length;
}
console.log("Initials:", getInitials("Ayesha Khan"));
console.log("Palindrome:", isPalindrome("Race car"));
console.log("Word count:", countWords("the quick brown fox"));