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
});

form.addEventListener("submit", e => {
  e.preventDefault();
  let value = {};
  input.forEach(input => {
    value[input.name] = input.value;
  });
  console.log(value);
});

function AvoidSpace(event) {
  if (event == true) {
    k = event.which;
  } else {
    k = window.event.keyCode;
  }
  if (k == 32) return false;
}

// axios was causing it to throw an error
// axios
//   .post("/submit", {
//     firstName: "Finn",
//     lastName: "Williams"
//   })
//   .then(
//     response => {
//       console.log(response);
//     },
//     error => {
//       console.log(error);
//     }
//   );

// you used .password, instead of #password
var passwordField = document.querySelector("#password");
var show = document.querySelector(".show");
var hide = document.querySelector(".hide");

show.onclick = function() {
  passwordField.setAttribute("type", "text");
  show.style.display = "none";
  hide.style.display = "block";
};
hide.onclick = function() {
  passwordField.setAttribute("type", "password");
  hide.style.display = "none";
  show.style.display = "block";
};

// Prevent users from being able to add empty spaces
// Add password toggle to the password input field
// OnSubmit, just make a post request to anywhere(Read up on fetch, but youre using axios)
// when you submit, wait for 5 seconds and then redirect page to google.com, open it on another tab
