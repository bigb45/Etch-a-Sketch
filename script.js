let color = "black";
let eraser = document.querySelector(".eraser");
let colorMode = document.querySelector("input");
let rand = document.querySelector(".random");
let erase = document.querySelector(".clear")
var randomize = false;
let canvas = document.querySelector(".canvas");
var divArray = []

erase.addEventListener("click", eraseCanvas)
rand.addEventListener("click", () => {
  rand.style.background = "#457b9d";
  rand.style.color = "white"
  eraser.style.background = "azure";
  eraser.style.color = "black";
  randomize = true;
});
eraser.addEventListener("click", () => {
  eraser.style.background = "#457b9d";
  eraser.style.color = "white";
  color = "white"
  rand.style.background = "azure";
  rand.style.color = "black"
  randomize = false
});

colorMode.addEventListener("change", () => {
  rand.style.background = "azure";
  eraser.style.background = "azure";
  rand.style.color = "black"
  eraser.style.color = "black"
  randomize = false
  color = colorMode.value;
});
function createGrid(y, x) {
  for (let i = 0; i < x; i++) {
    let div = document.createElement("div");
    canvas.appendChild(div).className = "row";
    for (let j = 0; j < y; j++) {
      let square = document.createElement("div");
      square.style.background = "white";
      square.style.border = "3px"

      square.style.width = `${canvas.offsetWidth / x}px`;
      square.style.height = `${canvas.offsetWidth / y}px`;
      square.addEventListener("mouseover", () => {
        if(randomize)
          color = genColor()
        square.style.background = color;
        divArray.push(square)
      });
      div.appendChild(square).className = "square";
    }
  }
}

function clear(){
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
}
}
function eraseCanvas(){
      divArray.forEach(earseItem)
     console.log(1)
}
function earseItem(item){
  item.style.background = "white"
}
function genColor() {
  {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }
}
let init = window.prompt("enter the number of squares you want (4-100")
createGrid(init, init)
let slider = document.querySelector(".slider")
slider. addEventListener("change", () =>{
  var dimension = slider.value
  clear()
  createGrid(dimension, dimension)

})
