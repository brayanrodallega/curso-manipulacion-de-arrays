const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// for
const result = [];
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6) {
        result.push(words[i]);
    }
}
console.log(result);
console.log(words);

// filter
const result2 = words.filter(word => word.length > 6);
console.log(result2);
console.log(words);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 99999,
        delivered: false,
    },
];

const result3 = orders.filter(order => order.delivered && order.total > 100);
console.log(result3);

const search = (query) => {
    return orders.filter(order => {
        return order.customerName.toLowerCase().includes(query.toLowerCase());
    });
}

// console.log(search('nicolas'));
// console.log(search('a'));
console.log(search('sefusekfsef'));
