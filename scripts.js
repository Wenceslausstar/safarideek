// JavaScript to toggle the navbar when the hamburger is clicked
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Hide sidebar on back button click
backButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
