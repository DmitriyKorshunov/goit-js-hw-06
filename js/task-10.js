const btnCreateAction = document.querySelector("[data-create]");
const btnDestroyAction = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreateAction.addEventListener("click", getAmount);
btnDestroyAction.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicWidth = 30;
  let basicHeight = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let sizeWidth = basicWidth + i * 10;
    let sizeHeight = basicHeight + i * 10;
    let div = document.createElement("div");
    let color = getRandomHexColor();
    div.style.width = `${sizeWidth}px`;
    div.style.height = `${sizeHeight}px`;
    div.style.backgroundColor = `${color}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
