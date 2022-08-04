const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length == textInput.getAttribute("data-length")) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.replace("valid", "invalid");
  }
});
