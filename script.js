let color = "black";
let eraser = document.querySelector(".eraser");
let colorMode = document.querySelector("input");
let rand = document.querySelector(".random");
let erase = document.querySelector(".clear");
let additive = document.querySelector(".additive");
var randomize = false;
let canvas = document.querySelector(".canvas");
var divArray = [];

let addColor = false;
additive.addEventListener("click", () => {
  addColor = !addColor;
});
erase.addEventListener("click", eraseCanvas);
rand.addEventListener("click", () => {
  rand.style.background = "#457b9d";
  rand.style.color = "white";
  eraser.style.background = "azure";
  eraser.style.color = "black";
  randomize = true;
});
eraser.addEventListener("click", () => {
  eraser.style.background = "#457b9d";
  eraser.style.color = "white";
  color = "white";
  rand.style.background = "azure";
  rand.style.color = "black";
  randomize = false;
});

colorMode.addEventListener("change", () => {
  rand.style.background = "azure";
  eraser.style.background = "azure";
  rand.style.color = "black";
  eraser.style.color = "black";
  randomize = false;
  color = colorMode.value;
});
function createGrid(y, x) {
  for (let i = 0; i < x; i++) {
    let div = document.createElement("div");
    canvas.appendChild(div).className = "row";
    for (let j = 0; j < y; j++) {
      let square = document.createElement("div");
      square.style.background = "white";
      square.style.cssText = "border-radius: 5px";
      square.style.width = `${canvas.offsetWidth / x}px`;
      square.style.height = `${canvas.offsetWidth / y}px`;
      square.addEventListener("mouseover", () => {
        paint(square);
      });
      div.appendChild(square).className = "square";
      divArray.push(square);
    }
  }
}

function paint(square) {
  if (randomize) color = genColor();
  square.style.background = color;
  if (addColor) {
    let alpha = 0.1;
    alpha += 0.01;
    square.style.opacity -= -alpha;
    console.log(square.style.opacity);
  }
}
function clear() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}
function eraseCanvas() {
  divArray.forEach(earseItem);
  alpha = 0;
}
function earseItem(item) {
  item.style.background = "white";
  item.style.opacity = "1";
}
function genColor() {
  {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }
}

let slider = document.querySelector(".slider");
slider.addEventListener("change", () => {
  var dimension = slider.value;
  clear();
  createGrid(dimension, dimension);
});
