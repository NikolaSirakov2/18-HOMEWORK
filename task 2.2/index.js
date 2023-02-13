let keyboardButton = document.createElement("h1");
document.body.appendChild(keyboardButton);
keyboardButton.innerText = "You press: ";

document.body.addEventListener("keydown", logKey);

function logKey(e) {
  keyboardButton.innerText += ` ${e.key}`;
}
