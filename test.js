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
    name: "Ar",
    isActive: true,
  },
];

users.sort((user1, user2) => user1.name < user2.name ? -1 : 1)

const namesArr = users
  .sort((a, b) => (b.name - a.name))
  .filter((e) => e.isActive)
  .map((user) => user.name);

console.log(users);
console.log(namesArr);
