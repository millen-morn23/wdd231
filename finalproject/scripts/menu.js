document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const isOpen = navMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";
  });
});
