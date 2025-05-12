async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to load members.json');
    const data = await response.json();
    return data.members;
  } catch (error) {
    console.error('Error fetching members:', error);
    return [];
  }
}

function createMemberCard(member) {
  const card = document.createElement('div');
  card.classList.add('member-card');

  const img = document.createElement('img');
  img.src = member.image;
  img.alt = `${member.name} Logo`;

  const info = document.createElement('div');
  info.classList.add('member-info');

  const name = document.createElement('h3');
  name.textContent = member.name;

  const address = document.createElement('p');
  address.textContent = member.address;

  const phone = document.createElement('p');
  phone.textContent = member.phone;

  const website = document.createElement('a');
  website.href = member.website;
  website.textContent = 'Visit Website';
  website.target = '_blank';

  info.appendChild(name);
  info.appendChild(address);
  info.appendChild(phone);
  info.appendChild(website);

  card.appendChild(img);
  card.appendChild(info);

  return card;
}

function displayMembers(members, view) {
  const container = document.getElementById('members');
  container.className = view + '-view';
  container.innerHTML = '';

  members.forEach(member => {
    const card = createMemberCard(member);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const members = await fetchMembers();
  displayMembers(members, 'grid');

  document.getElementById('grid-view').addEventListener('click', () => {
    displayMembers(members, 'grid');
  });

  document.getElementById('list-view').addEventListener('click', () => {
    displayMembers(members, 'list');
  });

  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
});
