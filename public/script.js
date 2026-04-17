// ========================================
// NAVBAR SCROLL
// ========================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========================================
// MOBILE NAV TOGGLE
// ========================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Initialize a11y state
if (navToggle) {
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ========================================
// FADE UP ANIMATION
// ========================================
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => fadeObserver.observe(el));

// ========================================
// COUNTER ANIMATION — FIXED
// ========================================
function animateCounter(el, target, duration = 1500) {
  let startTimestamp = null;
  const startValue = 0;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    el.textContent = Math.floor(progress * (target - startValue) + startValue);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = target; // Ensure exact final value
    }
  };
  
  window.requestAnimationFrame(step);
}

// Run counters immediately on page load
window.addEventListener('load', () => {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    animateCounter(el, target);
  });
});

// ========================================
// CONTACT FORM
// ========================================
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
  });
}
