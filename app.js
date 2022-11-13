// const sections = document.querySelectorAll("section");

// const sectionSlides = sections.length + 1;
// let currSlide = 0;

// sections.forEach((s, i) => {
//   s.style.transform = `translateY(${100 * i}%)`;
// });

// const goToSlide = function (slide) {
//   sections.forEach(
//     (s, i) => (s.style.transform = `translateY(${100 * (i - slide)}%)`)
//   );
// };

// goToSlide(0);

// const nextSlide = function () {
//   if (currSlide === sectionSlides) {
//     currSlide = 0;
//   } else {
//     currSlide++;
//   }
//   goToSlide(currSlide);
// };

// const prevSlide = function () {
//   if (currSlide === 0) {
//     currSlide = maxSlides;
//   } else {
//     currSlide--;
//   }
//   goToSlide(currSlide);
// };

// var lastScrollTop = 0;

// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener(
//   "scroll",
//   function () {
//     // or window.addEventListener("scroll"....
//     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     if (st > lastScrollTop) {
//       nextSlide();
//     } else {
//       prevSlide();
//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   },
//   false
// );

const menuBtns = document.querySelectorAll(".menuBtn");
const menuActive = document.querySelector(".menu--");
const body = document.querySelector("body");

console.log(menuBtns);

menuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menuActive.classList.toggle("menu--active");
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu--active"))
    menuActive.classList.remove("menu--active");
});
