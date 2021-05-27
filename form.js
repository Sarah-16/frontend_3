const form = document.querySelector(".form-container form");
const inputs = document.querySelectorAll(".form-container input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    console.log(input.value);
  });
});
