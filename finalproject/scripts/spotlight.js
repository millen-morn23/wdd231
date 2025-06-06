async function fetchAndDisplaySpotlight() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const qualified = data.members.filter(member =>
    member.membership === "Gold" || member.membership === "Silver"
  );

  const randomSpotlights = qualified.sort(() => 0.5 - Math.random()).slice(0, 2);

  const container = document.querySelector(".spotlight-container");

  randomSpotlights.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", fetchAndDisplaySpotlight);
