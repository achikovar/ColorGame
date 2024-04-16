function getRgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
let h1 = document.querySelector("h1");
h1.style.backgroundColor = "#52528C";
let colorDisplay = document.getElementById("color-display");
let colorArray = [];

let numSquares = 6;
let getRandomnumber = Math.floor(Math.random() * 6);

for (let i = 0; i < numSquares; i++) {
  colorArray.push(getRgb());
}

colorDisplay.innerHTML = colorArray[getRandomnumber];

function colorSquares(colors) {
  let guessBox = document.getElementById("container");
  guessBox.innerHTML = "";
  let color = colors;
  for (let i = 0; i < numSquares; i++) {
    let divSquare = document.createElement("div");
    divSquare.style.paddingBottom = "30%";
    divSquare.style.width = "30%";
    divSquare.style.borderRadius = "20%";
    divSquare.style.cursor = "pointer";
    divSquare.style.backgroundColor = color[i];
    guessBox.appendChild(divSquare);
    divSquare.addEventListener("click", function () {
      if (colorDisplay.innerHTML != this.style.backgroundColor) {
        alert("კიდევ სცადეთ");
      } else {
        h1.style.backgroundColor = this.style.backgroundColor;
        let allDivs = guessBox.querySelectorAll("div");
        allDivs.forEach(function (divs) {
          divs.style.backgroundColor = h1.style.backgroundColor;
        });
      }
    });
  }
}

let resetBtn = document.getElementById("reset");
resetBtn.style.cursor = "pointer";
resetBtn.addEventListener("click", function () {
  h1.style.backgroundColor = "#2c8e99";
  colorArray = [];
  for (let i = 0; i < numSquares; i++) {
    colorArray.push(getRgb());
  }
  colorSquares(colorArray);
  getRandomnumber = Math.floor(Math.random() * 6);
  colorDisplay.innerHTML = colorArray[getRandomnumber];
});

let hardBtn = document.getElementById("hard");
let easyBtn = document.getElementById("easy");

hardBtn.addEventListener("click", function () {
  easyBtn = document.getElementById("easy");
  hardBtn = this.classList.add("selected");
  easyBtn.classList.remove("selected");
  if (easyBtn.textContent == "მარტივი") {
    numSquares = 9;
    h1.style.backgroundColor = "#2c8e99";
    colorArray = [];
    for (let i = 0; i < numSquares; i++) {
      colorArray.push(getRgb());
    }
    colorSquares(colorArray);
    getRandomnumber = Math.floor(Math.random() * 6);
    colorDisplay.innerHTML = colorArray[getRandomnumber];
  }
});

easyBtn.addEventListener("click", function () {
  hardBtn = document.getElementById("hard");
  hardBtn.classList.remove("selected");
  easyBtn = this.classList.add("selected");

  if (hardBtn.textContent == "რთული") {
    numSquares = 6;
    h1.style.backgroundColor = "#2c8e99";
    colorArray = [];
    for (let i = 0; i < numSquares; i++) {
      colorArray.push(getRgb());
    }
    colorSquares(colorArray);
    getRandomnumber = Math.floor(Math.random() * 6);
    colorDisplay.innerHTML = colorArray[getRandomnumber];
  }
});

window.onload = colorSquares(colorArray);
