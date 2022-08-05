// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const bodyEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const spanColorTextEL = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColorEl.addEventListener("click", () => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColorTextEL.textContent = color;
});
