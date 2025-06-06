// Add timestamp on form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#membershipForm");
  const timestamp = document.querySelector("#timestamp");

  if (form && timestamp) {
    form.addEventListener("submit", () => {
      const now = new Date();
      timestamp.value = now.toISOString();
    });
  }
});
