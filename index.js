const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const navItems = document.querySelectorAll(".menu li a");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
});
