const people = [
  { name: "Anna", age: 25, city: "Kharkov" },
  { name: "Volodya", age: 30, city: "Lviv" },
  { name: "Kate", age: 27, city: "Kyiv" },
];

people.forEach((people) =>
  console.log(`${people.name} in city ${people.city}`)
);
