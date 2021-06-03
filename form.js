const form = document.querySelector(".form-container form");
const input = document.querySelectorAll(".form-container input");

form.addEventListener("submit", e => {
  e.preventDefault();
  let value = {};
  input.forEach(input => {
    // add each value to the object
    value[input.name] = input.value;

    // If there isnt a value in an input field, add error
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
    }
  });
  console.log(value);
});

// Prevent users from being able to add empty spaces
// Add password toggle to the password input field
// OnSubmit, just make a post request to anywhere(Read up on fetch, but youre using axios)
// when you submit, wait for 5 seconds and then redirect page to google.com, open it on another tab
