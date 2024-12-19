const contactForm = document.getElementById("contact-form");
const formValidation = document.getElementById("form-validation");

const headerMenuToggle = document.querySelector("#header-menu-toggle");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll("#nav-list li a");

const scrollTopButton = document.getElementById("scrollTop");

let isScrolling;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formValidation.style.display = "block";
  contactForm.style.display = "none";
});

headerMenuToggle.addEventListener("click", () =>
  nav.classList.toggle("active")
);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

function toggleScrollTopButton() {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
}

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

window.addEventListener("scroll", () => {
  toggleScrollTopButton();

  if (scrollTopButton.classList.contains("visible")) {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      scrollTopButton.classList.remove("visible");
    }, 2000);
  }
});
