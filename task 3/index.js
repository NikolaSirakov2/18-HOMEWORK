let div = document.createElement("div");
document.body.appendChild(div);




let image = document.createElement("img");
div.appendChild(image);
image.src = "./img.jpg";
image.style.position = "absolute";
image.style.width = "600px";


let bottom = 0;
let toz = 0;
let left = 0;
let right = 0;

document.addEventListener("keydown", pressArrowKey);

function pressArrowKey(e) {
  if (e.keyCode === 38) {
    bottom += 10;
    image.style.bottom = `${bottom}px`;
  } else if (e.keyCode === 40) {
    to += 10;
    image.style.top = `${to}px`
  } else if (e.keyCode === 37) {
    right += 10;
    image.style.right = `${right}px`;
  } else if (e.keyCode === 39) {
    left += 10;
    image.style.left = `${left}px`;
  }
}
