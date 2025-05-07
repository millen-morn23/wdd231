// Last modified
document.getElementById("lastmodified").textContent = document.lastModified;

// Course filter
function filterCourses(type) {
  const all = document.querySelectorAll(".course");
  all.forEach(course => {
    course.style.display =
      type === "all" ||
      (type === "wdd" && course.classList.contains("wdd")) ||
      (type === "cse" && course.classList.contains("cse"))
        ? "block"
        : "none";
  });
}

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("show");
});
