const textInput = document.querySelector("#validation-input");
console.log(textInput);
console.log(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
  console.log(event);
  console.log(event.target.value.length);
  return event.target.value.length == textInput.getAttribute("data-length")
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");
});
