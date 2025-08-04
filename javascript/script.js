const header = document.querySelector("header");
const navToggle = document.querySelector(".nav-toggle");
const wrapper = document.querySelector("#wrapper");

// sticky navbar
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// responsive menu
if (navToggle) {
  navToggle.addEventListener(
    "click",
    function (event) {
      if (wrapper.className == "show") {
        wrapper.className = "";
      } else {
        wrapper.className = "show";
      }
      event.preventDefault();
    },
    false
  );
}

// effect hamburger button
navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("effect");
  header.classList.add("sticky");
});

