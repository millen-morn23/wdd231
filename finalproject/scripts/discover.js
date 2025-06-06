const cardContainer = document.getElementById("cardContainer");
const visitMessage = document.getElementById("visitMessage");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

// Lazy image loading with IntersectionObserver
const lazyLoad = (img) => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.src = target.dataset.src;
        target.onload = () => target.classList.add('loaded');
        obs.unobserve(target);
      }
    });
  });
  observer.observe(img);
};

// Fetch and build cards
async function loadCards() {
  try {
    const response = await fetch("data/discover.json");
    const data = await response.json();

    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      // Image
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.setAttribute("data-src", item.image);
      img.setAttribute("alt", item.name);
      img.setAttribute("loading", "lazy");
      lazyLoad(img);
      figure.appendChild(img);

      // Content container
      const content = document.createElement("div");
      content.className = "card-content";

      const h2 = document.createElement("h2");
      h2.textContent = item.name;

      const address = document.createElement("address");
      address.textContent = item.address;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      const btn = document.createElement("a");
      btn.textContent = "Learn More";
      btn.href = "#";
      btn.className = "cta-button";

      // Append content to card
      content.append(h2, address, desc, btn);
      card.append(figure, content);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading cards:", error);
  }
}

// Visit tracking
function showVisitMessage() {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  if (lastVisit) {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    visitMessage.textContent = `👋 Welcome back! It's been ${days} day(s) since your last visit.`;
  } else {
    visitMessage.textContent = "👋 Welcome! This is your first visit.";
  }
  localStorage.setItem("lastVisit", now);
}

// View toggle
gridBtn.addEventListener("click", () => {
  cardContainer.classList.add("grid-view");
  cardContainer.classList.remove("list-view");
});
listBtn.addEventListener("click", () => {
  cardContainer.classList.add("list-view");
  cardContainer.classList.remove("grid-view");
});

// Initialize
loadCards();
showVisitMessage();
