function toggleMenu() {
  let nav = document.getElementById("navbar");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

// Scroll to menu section
function showMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
