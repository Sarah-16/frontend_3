const form = document.querySelector(".form-container form");
const inputs = document.querySelectorAll(".form-container input");

form.addEventListener("submit", e => {
  e.preventDefault();
  // console.log(document.myForm.firstName.value);
  validate();
  let values = {};
  inputs.forEach(input => {
    values[input.name] = input.value;
  });
  console.log(values);
});

function validate() {
  if (document.myForm.firstName.value == "") {
    alert("Please provide your name!");
    document.querySelector("#first-name").focus();
    return false;
  }
  if (document.myForm.lastName.value == "") {
    alert("Please provide your Email!");
    document.querySelector("#last-name").focus();
    return false;
  }
}
