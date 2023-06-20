const input = document.getElementById("my-input");
const button = document.getElementById("my-button");
const body = document.querySelector("body");

button.addEventListener("click", function () {
  const value = input.value;

  if (localStorage.getItem("name") === value) {
    input.style.display = "none";
    button.style.display = "none";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Привіт " + value;
    body.appendChild(paragraph);
  } else {
    localStorage.setItem("name", value);
    input.value = "";
  }
});
