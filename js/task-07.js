const inputChangeEl = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

inputChangeEl.addEventListener("input", (evt) => {
  console.log(evt);
  spanText.style.fontSize = `${evt.target.value}px`;
});
