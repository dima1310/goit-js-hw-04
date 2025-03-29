const user = {
  firstName: "dima",
  lastName: "ponomarenko",
  age: 43,
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
