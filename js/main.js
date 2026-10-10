// ===== Menu mobile =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// ===== Formulaire de contact (simulation) =====
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulation d'envoi
  const formData = new FormData(form);
  const name = formData.get('name');

  formMessage.hidden = false;
  formMessage.className = 'form-message success';
  formMessage.textContent = `Merci ${name} ! Ton message a bien été envoyé. (simulation)`;

  form.reset();

  // Cacher le message après 5 secondes
  setTimeout(() => {
    formMessage.hidden = true;
  }, 5000);
});

// ===== Smooth scroll amélioré (optionnel) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
