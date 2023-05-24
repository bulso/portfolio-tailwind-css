//navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixnav = header.offsetTop;

  if (window.pageYOffset > fixnav) {
    // add class to  header
    header.classList.add("navbar-fixed");
  } else {
    // add class to  header
    header.classList.remove("navbar-fixed");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  // add class to hamburger saat diklik
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
