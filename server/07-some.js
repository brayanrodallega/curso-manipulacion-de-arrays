const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
let someEven = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        someEven = true;
        break;
    }
}
console.log('someEvent', someEven);

// some
const someEven2 = numbers.some(item => item % 2 === 0);
console.log('someEvent2', someEven2);

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
];

// some
const someDelivered = orders.some(item => item.delivered);
console.log('someDelivered', someDelivered);


// Calendar

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
  
  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (appointment) => {
    return dates.some(item => {
        return areIntervalsOverlapping(
            { start: item.startDate, end: item.endDate },
            { start: appointment.startDate, end: appointment.endDate }
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));