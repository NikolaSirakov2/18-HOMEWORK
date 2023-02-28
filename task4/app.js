let form = document.createElement("form");
document.body.appendChild(form);
form.style.display = "inline-block";
form.style.background = "pink";
form.style.gap = "10px";

let redInput = document.createElement("input");
form.appendChild(redInput);
redInput.id = "red";

let greenInput = document.createElement("input");
form.appendChild(greenInput);
greenInput.id = "green";

let blueInput = document.createElement("input");
form.appendChild(blueInput);
blueInput.id = "blue";

let button = document.createElement("button");
form.appendChild(button);
button.style.width = "200px";
button.style.height = "50px";