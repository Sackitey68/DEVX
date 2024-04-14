// Make mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");

const header = document.querySelector("header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});


// set current Year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
