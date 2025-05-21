document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.getElementById("timestamp");
  timestamp.value = Date.now();

  // Optional: Persist form data
  const form = document.querySelector('.join-form');
  form.addEventListener('submit', () => {
    localStorage.setItem("joinForm", JSON.stringify(Object.fromEntries(new FormData(form))));
  });
});
