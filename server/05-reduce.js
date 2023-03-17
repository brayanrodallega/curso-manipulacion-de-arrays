const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// reduce
const sum2 = numbers.reduce((sum, item) => sum + item, 0);
console.log(sum2);