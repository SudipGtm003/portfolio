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

const photoCard = document.querySelector('.photo-card');
const profileImage = photoCard ? photoCard.querySelector('img') : null;

if (photoCard && profileImage) {
  const photos = [
    'assets/profile.jpg',
    'assets/photo5.jpg',
    'assets/photo2.jpg',
    'assets/photo3.jpg'
  ];

  // Preload so switching feels instant
  photos.forEach(src => {
    const preload = new Image();
    preload.src = src;
  });

  let photoIndex = 0;

  const showNextPhoto = () => {
    photoIndex = (photoIndex + 1) % photos.length;
    profileImage.classList.add('swapping');

    window.setTimeout(() => {
      profileImage.src = photos[photoIndex];
      profileImage.classList.remove('swapping');
    }, 220);
  };

  photoCard.addEventListener('click', showNextPhoto);

  photoCard.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showNextPhoto();
    }
  });
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button');
    if (btn) btn.innerHTML = 'Sending...';
  });
}
