let p = document.createElement("h1");
document.body.appendChild(p);
p.textContent = "Which is your favorite pet?";

let pets = document.createElement("select");
document.body.appendChild(pets);
pets.name = "pets";
pets.className = "pets";

let chose = document.createElement("option");
pets.appendChild(chose);
chose.value = "chose";
chose.innerText = "Chose pet";

let cat = document.createElement("option");
pets.appendChild(cat);
cat.value = "cat";
cat.innerText = "cat";

let dog = document.createElement("option");
pets.appendChild(dog);
dog.value = "dog";
dog.innerText = "dog";

let horse = document.createElement("option");
pets.appendChild(horse);
horse.value = "horse";
horse.innerText = "horse";

let text = document.createElement("h2");
document.body.appendChild(text);
text.innerText = "PET";

let img = document.createElement("img");
document.body.appendChild(img);
img.alt = "pet image"
img.style.height = "25%";
img.style.width = "60%"


pets.addEventListener("change", (e) => {
    text.textContent = `${e.target.value}`;
    img.src = `./images/${e.target.value}.jpg`
})