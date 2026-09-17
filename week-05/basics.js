const course = "Web Eng";
try{
    course = "Other";
}catch(error){
    console.log("const error: " , error.message);
}

let count = 0;
count++;
count++;

console.log("Count: ",count);

console.log("0 == false: ", 0==false); // true because == checks only value
console.log("0 === false: ", 0===false); // false because === checks both value and type
console.log("[] == false: ", []==false); // true because == converts the empty array and false during comparison
