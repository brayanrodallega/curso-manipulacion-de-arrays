const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
let rta = true;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 11) {
        rta = false;
        break;
    }
}

console.log('for: ', rta);

// every
const rta2 = numbers.every((number) => number <= 11);
console.log('every: ', rta2);


const team = [
    {
      name: "Nicolas",
      age: 19,
    },
    {
      name: "Andrea",
      age: 38,
    },
    {
      name: "Zulema",
      age: 22,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta3 = team.every((member) => member.age >= 18);
    console.log('every: ', rta3);