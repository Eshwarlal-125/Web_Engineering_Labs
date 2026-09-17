// Activity D — Students Pipeline
const students = [
    { name: "Ali", score: 92, active: true },
    { name: "Sara", score: 78, active: true },
    { name: "Bilal", score: 45, active: false }
];
const total = students.reduce((sum, student) => sum + student.score, 0);
const average = total / students.length;
console.log("Class average:", average);
const aboveAverageNames = students
    .filter(student => student.score > average)
    .map(student => student.name);
console.log("Above average:", aboveAverageNames);
console.log("Some score > 90:", students.some(s => s.score > 90));
console.log("Every score > 40:", students.every(s => s.score > 40));
const sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log("Sorted students:", sortedStudents);
console.log("Original students:", students);