const pets = ['cat', 'dog', 'rat'];

// for loop
let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
    if (pets[i] === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for: ', includeInArray);

// includes
const includeInArray2 = pets.includes('dog');
console.log('includes: ', includeInArray2);