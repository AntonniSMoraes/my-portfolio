const burgerBtn = document.querySelector("header button");
const mobileMenu = document.querySelector(".header_list_mobile");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  burgerBtn.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    mobileMenu.classList.remove("active");
    burgerBtn.classList.remove("active");
  }
});
