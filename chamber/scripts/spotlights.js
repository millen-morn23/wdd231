async function fetchSpotlightMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to load members.json');
    const data = await response.json();
    return data.members.filter(member => member.membership >= 2); // Silver and Gold
  } catch (error) {
    console.error('Error fetching spotlight members:', error);
    return [];
  }
}

function displaySpotlights(members) {
  const spotlightContainer = document.getElementById('spotlight-container');
  spotlightContainer.innerHTML = '';

  const selected = members.sort(() => 0.5 - Math.random()).slice(0, 3);

  selected.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} Logo">
      <div>
        <h4>${member.name}</h4>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p class="level"><strong>Membership:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
      </div>
    `;
    spotlightContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const members = await fetchSpotlightMembers();
  displaySpotlights(members);
});
