document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set last modified date
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last updated: ${document.lastModified}`;
  }
});
