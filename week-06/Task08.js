// Write a function groupEvenOdd(arr) that returns an object containing separate arrays for even and odd numbers.

function groupEvenOdd(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even[even.length] = arr[i];
        } else {
            odd[odd.length] = arr[i];
        }
    }
    return {
        even: even,
        odd: odd
    };
}
console.log(groupEvenOdd([1, 2, 3, 4, 5, 6]));