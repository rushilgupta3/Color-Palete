let colors = [];
let tempColor;
let count = 0;

function changeTheme() {
  document.querySelector("i").classList.toggle("fa-sun");
  document.querySelector("i").classList.toggle("fa-moon");
  document.querySelector("body").classList.toggle("dark-theme");
}
function addColor() {
  if (colors[colors.length - 1] != tempColor) {
    if (colors.length < 6) {
      count++;
      console.log(tempColor);
      colors.push(tempColor);
      //   console.log(colors);
      let favColor = document.querySelector(".colors");
      favColor.innerHTML += `<div class="palette" id="box${count}" onmouseenter="hover(event,${count})" onmouseleave="endHover(${count})" style="background-color:${tempColor}"></div>`;
      if (count == 6) count = 0;
    }
  }
}

function changeColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let color = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  let box = document.querySelector(".box");

  box.style.backgroundColor = color;
  tempColor = color;
  console.log(r, g, b);
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function hover(e, id) {
  console.log(id);
  console.log(colors);
  let box = document.querySelector(`#box${id}`);
  box.innerHTML = `<div class="icons"><div class="copy"><i id="icon1" class="fa-solid fa-copy"></i></div><div class="remove"><i id="icon2" class="fa-solid fa-trash"></i></div></div>`;
  let color = colors[id - 1];
  let icon1 = document.querySelector("#icon1");
  let icon2 = document.querySelector("#icon2");

  icon1.addEventListener("click", () => {
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    console.log(color);
    navigator.clipboard.writeText(color);
    icon1.classList.remove("fa-copy");
    icon1.classList.add("fa-check");
  });
  icon2.addEventListener("click", () => {
    colors.splice(id - 1, 1);
    box.remove();
    console.log(colors);
  });
}

function endHover(id) {
  let box = document.querySelector(`#box${id}`);
  box.innerHTML = "";
}
