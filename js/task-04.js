const counterValue = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

const conteinerActionEL = document.querySelector("#counter");
const btnDecrement = conteinerActionEL.firstElementChild;
const btnIncrement = conteinerActionEL.lastElementChild;
const valueEl = document.querySelector("#value");

btnDecrement.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

btnIncrement.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
