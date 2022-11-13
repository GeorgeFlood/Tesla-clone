const menuBtns = document.querySelectorAll(".menuBtn");
const menuActive = document.querySelector(".menu--");

console.log(menuBtns);

menuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    menuActive.classList.toggle("menu--active");
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu--active"))
    menuActive.classList.remove("menu--active");
});
