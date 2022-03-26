const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from input and remove space with trim()
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    //show error
    //add error class
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    //   add success class
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    //show error
    //add error class
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    //   add success class
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    //   add success class
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    //show error
    //add error class
    setErrorFor(password, "Password cannot be empty");
  } else {
    //   add success class
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //   add error message inside small
  small.innerText = message;

  //   add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //   add success class
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
