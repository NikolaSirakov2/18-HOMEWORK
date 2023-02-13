let image = document.createElement("img");
document.body.appendChild(image);
image.src = "./img.jpg";
image.style.position = "absolute";


let bo = 0;
let to = 0;
let le = 0;
let ri = 0;

document.addEventListener("keydown", pressArrowKey);

function pressArrowKey(e) {
  if (e.keyCode === 38) {
    bo += 10;
    image.style.bottom = `${bo}px`;
  } else if (e.keyCode === 40) {
    to += 10;
    image.style.top = `${to}px`
  } else if (e.keyCode === 37) {
    ri += 10;
    image.style.right = `${ri}px`;
  } else if (e.keyCode === 39) {
    le += 10;
    image.style.left = `${le}px`;
  }
}
