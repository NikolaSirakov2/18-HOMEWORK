const users = [
  {
    id: 5,
    name: "Nik",
    isActive: true,
  },
  {
    id: 2,
    name: "Papa",
    isActive: false,
  },
  {
    id: 3,
    name: "Aron",
    isActive: true,
  },
];

const namesArr = users
  .sort((a, b) => (a.id - b.id))
  .filter((e) => e.isActive)
  .map((user) => user.name);

console.log(users);
console.log(namesArr);
