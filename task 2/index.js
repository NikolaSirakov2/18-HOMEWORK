let p = document.createElement("p");
document.body.appendChild(p);
p.textContent = "This is test!";

let pets = document.createElement("select");
document.body.appendChild(pets);
pets.name = "pets";

let cat = document.createElement("option");
pets.appendChild(cat);

cat.value = "cat";
cat.innerText = "Cat";

