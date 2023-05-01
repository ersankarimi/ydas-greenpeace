// Global Variables
const bodyElement = document.querySelector(".Site");

// Navbar Dropdown
const navbarDropdownElement = document.querySelector(
  ".navbar__nav-list__item__dropdown__button"
);

navbarDropdownElement.addEventListener("click", () => {
  // handling the data-state (open or closed)

  if (navbarDropdownElement.getAttribute("data-state") === "closed") {
    navbarDropdownElement.setAttribute("data-state", "open");
    navbarDropdownElement.setAttribute("aria-expanded", "true");
  } else {
    navbarDropdownElement.setAttribute("data-state", "closed");
    navbarDropdownElement.setAttribute("aria-expanded", "false");
  }
});

// Navbar Humberger Button

const navbarHumbergerButtonElement = document.querySelector(
  ".navbar__nav__hamburger-button"
);

navbarHumbergerButtonElement.addEventListener("click", () => {
  // handling the data-state (open or closed)

  if (navbarHumbergerButtonElement.getAttribute("data-state") === "closed") {
    navbarHumbergerButtonElement.setAttribute("data-state", "open");
    navbarHumbergerButtonElement.setAttribute("aria-expanded", "true");
    bodyElement.style.overflow = "hidden";
  } else {
    navbarHumbergerButtonElement.setAttribute("data-state", "closed");
    navbarHumbergerButtonElement.setAttribute("aria-expanded", "false");
    bodyElement.style.overflow = "auto";
  }
});
