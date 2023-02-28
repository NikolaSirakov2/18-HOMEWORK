let div = document.createElement("div");
document.body.appendChild(div);

let image = document.createElement("img");
div.appendChild(image);
image.src = "./img.jpg";
image.style.display = "flex"
image.style.position = "absolute";
image.style.width = "600px";
// image.style.top = "250px";
// image.style.left = "700px";



// let bottom = 0;
let y = 0;
let x = 0;
// let right = 0;

document.addEventListener("keydown", pressArrowKey);

function pressArrowKey(e) {
  if (e.keyCode === 38 && x > 0) {
    x -= 10;
    image.style.top = `${x}px`;
  } else if (e.keyCode === 40 && x < 590) {
    x += 10;
    image.style.top = `${x}px`
  } else if (e.keyCode === 37 && y > 0) {
    y -= 10;
    console.log(y);
    image.style.left = `${y}px`;
  } else if (e.keyCode === 39 && y < 1320) {
    y += 10;
    
    image.style.left = `${y}px`;
  }
}


