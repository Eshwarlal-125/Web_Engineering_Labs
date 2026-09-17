// Activity C
function letterGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
function displayCount(n) {
    return n ?? 10;
}
console.log("Grade for 95:", letterGrade(95));
console.log("Grade for 85:", letterGrade(85));
console.log("Grade for 65:", letterGrade(65));
console.log("Grade for 40:", letterGrade(40));

console.log("displayCount(0):", displayCount(0));
console.log("displayCount(null):", displayCount(null));
console.log("displayCount(42):", displayCount(42));