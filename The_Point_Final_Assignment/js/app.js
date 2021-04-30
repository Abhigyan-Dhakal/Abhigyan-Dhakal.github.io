const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav-bar-left");

burger.addEventListener("click", () => {
  navBar.classList.toggle("toggle-nav");
});
