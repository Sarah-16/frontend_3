const form = document.querySelector(".form-container form");
const inputs = document.querySelectorAll(".form-container input");

form.addEventListener("submit", e => {
  e.preventDefault();
  let values = {};
  inputs.forEach(input => {
    // console.log(`input.name: ${input.name}  input.value: ${input.value}`);
    values[input.name] = input.value;
  });
  console.log(values);
});
