"use strict";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
};

const validateUsername = (username) => {
  return username && username.length >= 3;
};

const validatePassword = (password) => {
  return password && password.length >= 6;
};

const checkValidity = () => {
  // Get the input elements and indicator
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const indicator = document.getElementById("indicator");

  const isUsernameValid = validateUsername(usernameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);

  if (!isUsernameValid) {
    document.querySelector("#usernameError").classList.add("show");
  } else {
    document.querySelector("#usernameError").classList.remove("show");
  }

  if (!isEmailValid) {
    document.querySelector("#emailError").classList.add("show");
  } else {
    document.querySelector("#emailError").classList.remove("show");
  }

  if (!isPasswordValid) {
    document.querySelector("#passwordError").classList.add("show");
  } else {
    document.querySelector("#passwordError").classList.remove("show");
  }

  if (isUsernameValid && isEmailValid && isPasswordValid) {
    indicator.classList.add("valid");
  } else {
    indicator.classList.remove("valid");
  }
};

const showFormSuccess = () => {
  const form = document.querySelector(".signup form");
  const successMessage = document.querySelector(".signup__success");

  form.classList.add("hide");
  successMessage.classList.add("show-flex");
};

function preventSubmit(e) {
  e.preventDefault();

  const submitBtn = this.querySelector("button");

  if (!this.checkValidity()) {
    submitBtn.classList.add("shake");
    console.log("submit");

    setTimeout(() => {
      submitBtn.classList.remove("shake");
    }, 600);
  } else {
    showFormSuccess();
  }
}

const toggleGoodApproach = (e) => {
  const usernameField = document.querySelector(".signup__controls.username");
  const usernameInput = document.getElementById("username");

  if (e.target.checked) {
    usernameField.classList.add("hide");
    usernameInput.type = "hidden";
  } else {
    usernameField.classList.remove("hide");
    usernameInput.type = "text";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const form = document.querySelector(".signup form");
  const goodApproachCheckbox = document.querySelector("#good-approach");

  // Fields validation
  usernameInput.addEventListener("input", checkValidity);
  emailInput.addEventListener("input", checkValidity);
  passwordInput.addEventListener("input", checkValidity);

  form.addEventListener("submit", preventSubmit);

  // Good approach checkbox
  goodApproachCheckbox.addEventListener("change", toggleGoodApproach);
});
