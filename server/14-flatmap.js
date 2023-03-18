const users = [
    { userId: 1, username: 'Tom', attributes: ["Nice", "Cute"] },
    { userId: 2, username: 'Jerry', attributes: ["Cute", "Funny"] },
    { userId: 3, username: 'Spike', attributes: ["Funny", "Cute"] },
];

const rta = users.map(user => user.attributes).flat();
console.log(rta);

// flatMap
const rta2 = users.flatMap(user => user.attributes);
console.log(rta2);


const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

// Return startDates from all calendars
const rta3 = Object.values(calendars).flatMap(calendar => calendar.map(c => c.startDate));
console.log(rta3);