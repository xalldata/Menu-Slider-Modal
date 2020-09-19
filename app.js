var modalContainer = document.querySelector(".modal");
var signUp = document.querySelector(".sign-up");
var closeBtn = document.querySelector(".close");
var ham = document.querySelector(".ham");

var body = document.querySelector("body");

var nav = document.querySelector("nav");

signUp.addEventListener("click", function () {
  modalContainer.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modalContainer.classList.remove("show-modal");
});

ham.addEventListener("click", function () {
  body.classList.toggle("show-nav");
});
