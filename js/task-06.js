const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  Number(event.target.value.length) !==
  Number(textInput.getAttribute("data-length"))
    ? textInput.classList.add("invalid")
    : textInput.classList.replace("invalid", "valid");
});
