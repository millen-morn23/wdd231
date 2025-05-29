// discover.js

const container = document.getElementById('discover-container');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');
const visitMessage = document.getElementById('visit-message');

const jsonUrl = 'data/discover.json';

// Display last visit
function showVisitMessage() {
  const lastVisit = localStorage.getItem('lastVisit');
  const now = new Date();

  if (!lastVisit) {
    visitMessage.textContent = 'Welcome! This is your first visit.';
  } else {
    const daysAgo = Math.floor((now - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
    visitMessage.textContent = `Welcome back! It's been ${daysAgo} day(s) since your last visit.`;
  }

  localStorage.setItem('lastVisit', now.toISOString());
}

// Build card
function buildCard(place) {
  const card = document.createElement('div');
  card.classList.add('discover-card');

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button class="learn-more">Learn More</button>
  `;

  return card;
}

// Display data
async function loadCards() {
  try {
    const response = await fetch(jsonUrl);
    if (!response.ok) throw new Error('Failed to fetch JSON');
    const data = await response.json();

    container.innerHTML = '';
    data.places.forEach(place => {
      container.appendChild(buildCard(place));
    });
  } catch (err) {
    console.error('Error loading discover cards:', err);
    container.innerHTML = '<p>Failed to load places of interest.</p>';
  }
}

// Toggle layout
gridBtn.addEventListener('click', () => {
  container.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  container.classList.add('list-view');
});

document.addEventListener('DOMContentLoaded', () => {
  showVisitMessage();
  loadCards();
});
