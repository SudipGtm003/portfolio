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

// Project card click -> show details on same page (modal)
const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.querySelector('.project-modal-backdrop');
const modalClose = document.querySelector('.project-modal-close');

const projects = {
  astrology: {
    date: 'Latest project',
    title: 'Vedic Astrology & Panchanga Website',
    details: [
      'Built a Panchanga system that generates daily, monthly, and yearly calendars for 300 years (BS 1900–2200).',
      'Developed custom calculation methods using Vedic astrology formulas to calculate Tithi, Nakshatra, Yoga, Karana, Chandra Rashi, planetary positions, sunrise, and sunset.',
      'Created a Janma Kundali generation feature that generates birth charts based on users\' birth date, time, and location, with downloadable PDF reports.',
      'Integrated an AI-powered astrology assistant that allows users to ask questions about their lives and receive personalized predictions and guidance based on their birth charts and Vedic astrology.',
      'Added location-based Panchanga calculations with Nepali Bikram Sambat dates and traditional astrology details.',
      'Designed a user-friendly interface with Nepali language support and traditional Cheena-style Kundali presentation.'
    ],
    link: 'https://nepal-vedic-astrology-and-panchanga-289622525399.asia-southeast1.run.app/'
  },
  learning: {
    date: 'Vedic Astrology Learning Platform',
    title: 'Vedic Astrology Learning Platform',
    details: [
      'Developed an online learning platform focused on Vedic astrology, covering Rashi, Graha, Bhava, Nakshatra, Tithi, and other fundamental astrology concepts.',
      'Created learning modules explaining planetary positions, house placements, zodiac signs, their effects, and challenges in Vedic astrology.',
      'Integrated Sanskrit references with Nepali translations to help users understand traditional Vedic astrology concepts.',
      'Added detailed explanations of planetary combinations and their effects, along with traditional astrological remedies.',
      'Designed a bilingual learning experience supporting Nepali and English languages for beginners and astrology enthusiasts.',
      'Planned a certificate-based learning system with free learning resources and login-based access to paid courses.'
    ],
    link: 'https://github.com/SudipGtm003/vedic-astrology-knowledge-based-website'
  }
};

const modalProjectDate = document.getElementById('modalProjectDate');
const modalProjectTitle = document.getElementById('modalProjectTitle');
const modalProjectDetails = document.getElementById('modalProjectDetails');
const modalProjectActions = document.getElementById('modalProjectActions');

const openProjectModal = (event) => {
  const card = event.currentTarget;
  const projectKey = card.getAttribute('data-project');
  const project = projects[projectKey];

  if (!project || !projectModal) return;

  // Populate modal content
  if (modalProjectDate) modalProjectDate.textContent = project.date;
  if (modalProjectTitle) modalProjectTitle.textContent = project.title;

  // Render details list
  if (modalProjectDetails) {
    modalProjectDetails.innerHTML = project.details
      .map(detail => `<li>${detail}</li>`)
      .join('');
  }

  // Render action link
  if (modalProjectActions) {
    if (project.link) {
      modalProjectActions.innerHTML = `
        <a class="btn primary" href="${project.link}" target="_blank" rel="noreferrer">
          Visit project
        </a>
      `;
    } else {
      modalProjectActions.innerHTML = '';
    }
  }

  projectModal.style.display = 'flex';
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
  if (projectModal) {
    projectModal.style.display = 'none';
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

projectCards.forEach(card => {
  card.addEventListener('click', openProjectModal);

  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProjectModal(event);
    }
  });

  // Stop the Visit Project link from opening the modal
  const link = card.querySelector('.project-link');
  if (link) {
    link.addEventListener('click', event => {
      event.stopPropagation();
    });
  }
});

if (modalClose) {
  modalClose.addEventListener('click', closeProjectModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeProjectModal);
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && projectModal && projectModal.style.display === 'flex') {
    closeProjectModal();
  }
});
