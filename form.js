const form = document.querySelector(".form-container form");
const input = document.querySelectorAll(".form-container input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  input.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = {};
  input.forEach((input) => {
    value[input.name] = input.value;
  });
  console.log(value);
});
