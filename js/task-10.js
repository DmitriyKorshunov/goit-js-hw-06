// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const btnCreateAction = document.querySelector("[data-create]");
console.log(btnCreateAction);
const btnDestroyaction = document.querySelector("[data-destroy]");
console.log(btnDestroyaction);
const divBoxesEL = document.querySelector("#boxes");
console.log(divBoxesEL);
let amount = document.getElementsByTagName("input").value;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function createBoxes(amount) {
  console.log(amount);

  console.log(divEl);
}
const divEl = document.createElement("div");
divEl.width = 30;
divEl.height = 30;
