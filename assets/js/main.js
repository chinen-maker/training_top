const hamburger = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__listBox");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  document.body.classList.toggle("is-menu-open");
});