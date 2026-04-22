const burger = document.querySelector(".burger");
const menu = document.querySelector(".full-menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
});