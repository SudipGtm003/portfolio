const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
  });
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const visitorCount = document.getElementById('visitorCount');
if (visitorCount) {
  const visitorKey = 'sudip-portfolio-visits';
  const currentVisits = Number(localStorage.getItem(visitorKey) || 0) + 1;
  localStorage.setItem(visitorKey, currentVisits);
  visitorCount.textContent = currentVisits;
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button');
    if (btn) btn.innerHTML = 'Sending...';
  });
}
