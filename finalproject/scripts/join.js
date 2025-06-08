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

// Select all membership cards
const cards = document.querySelectorAll('.membership-cards .card');
const membershipSelect = document.getElementById('membership');

// Add click listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove "selected" class from all cards
    cards.forEach(c => c.classList.remove('selected'));
    // Add "selected" to clicked one
    card.classList.add('selected');

    // Set corresponding select option
    const level = card.getAttribute('data-level');
    membershipSelect.value = level;
  });
});

const paymentSection = document.getElementById('paymentInstructions');

// Update payment instructions visibility based on dropdown selection
membershipSelect.addEventListener('change', () => {
  const selected = membershipSelect.value;
  if (selected === 'silver' || selected === 'gold') {
    paymentSection.classList.remove('hidden');
  } else {
    paymentSection.classList.add('hidden');
  }
});

// Also trigger it when a card is clicked
cards.forEach(card => {
  card.addEventListener('click', () => {
    const level = card.getAttribute('data-level');
    if (level === 'silver' || level === 'gold') {
      paymentSection.classList.remove('hidden');
    } else {
      paymentSection.classList.add('hidden');
    }
  });
});
