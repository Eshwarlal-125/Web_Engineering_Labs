// Write a function countVowels(str) that returns the number of vowels in a string. Example: "JavaScript" → 3"
function countVowels(str)
{
    let count = 0;
    vowel = "aeiouAEIOU";
    for(let char of str)
    {
        if(vowel.includes(char))
        {
            count++;
        }
    }
    return count;
}
console.log(countVowels("JavaScript"));