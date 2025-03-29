const user = {
  name: "Dima",
  age: 30,
  city: "Kyiv",
  hobbies: ["football", "music", "read"],
};

const newUser = { ...user, country: "Ukraine" };
console.log(newUser);

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(50, 100, 150));
