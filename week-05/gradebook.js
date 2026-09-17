// Task 1 — Gradebook Script
const students = [
    { name: "Ali", score: 92 },
    { name: "Sara", score: 78 },
    { name: "Bilal", score: 45 },
    { name: "Ayesha", score: 88 },
    { name: "Hamza", score: 65 }
];

const total = students.reduce((sum, student) => sum + student.score, 0);
const average = total / students.length;

console.log("Class Average:", average.toFixed(2));

const highestScorer = students.reduce((highest, student) =>
    student.score > highest.score ? student : highest
);

console.log(
    "Highest Scorer:",
    highestScorer.name,
    "-",
    highestScorer.score
);

const lowestScorer = students.reduce((lowest, student) =>
    student.score < lowest.score ? student : lowest
);

console.log(
    "Lowest Scorer:",
    lowestScorer.name,
    "-",
    lowestScorer.score
);

const passingStudents = students.filter(student => student.score >= 50);

const passRate = (passingStudents.length / students.length) * 100;

console.log("Pass Rate:", passRate + "%");

const sortedNames = [...students]
    .sort((a, b) => b.score - a.score)
    .map(student => student.name);

console.log("Names High → Low:", sortedNames);