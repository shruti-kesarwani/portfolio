// Theme toggle and persistence
const root = document.body;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);
toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form validation
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    msg.textContent = 'Please fill out all required fields.';
    msg.className = 'msg err';
    msg.style.display = 'block';
    return;
  }
  if (!isEmail(email)) {
    msg.textContent = 'Please provide a valid email address.';
    msg.className = 'msg err';
    msg.style.display = 'block';
    return;
  }

  msg.textContent = 'Thanks! Your message was sent.';
  msg.className = 'msg ok';
  msg.style.display = 'block';
  form.reset();
});

form.addEventListener('reset', () => {
  msg.textContent = '';
  msg.className = 'msg';
  msg.style.display = 'none';
});