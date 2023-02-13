let p = document.createElement("p");
document.body.appendChild(p);
p.textContent = "Which is your favorite pet?";

let pets = document.createElement("select");
document.body.appendChild(pets);
pets.name = "pets";

let chose = document.createElement("option");
pets.appendChild(chose);
chose.value = "chose";
chose.innerText = "Chose pet";

let cat = document.createElement("option");
pets.appendChild(cat);
cat.value = "cat";
cat.innerText = "Cat";

let dog = document.createElement("option");
pets.appendChild(dog);
dog.value = "dog";
dog.innerText = "Dog";

let horse = document.createElement("option");
pets.appendChild(horse);
horse.value = "horse";
horse.innerText = "Horse";
