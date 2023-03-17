const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 456) {
        rta = numbers[i];
        break;
    }
}
console.log('for: ', rta);

// find
const rta2 = numbers.find((number) => number === 456);
console.log('find: ', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find((product) => product.id === '🍔');
console.log('find: ', rta3);

// findIndex
const rta4 = products.findIndex((product) => product.id === '🍔');
console.log('findIndex: ', rta4);