// Function 1
function sum (...numbers) {
   return numbers.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 5, 8));

// Function 2

function sum2 (num1, num2, num3, num4) {
   return num1 + num2 + num3 + num4;
}
let array = [1, 2, 5, 8];

console.log(sum2(...array));