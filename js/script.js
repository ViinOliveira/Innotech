// Animação do indicador
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function updateIndicator(element) {
  indicator.style.width = `${element.offsetWidth}px`;
  indicator.style.left = `${element.offsetLeft}px`;
}

items.forEach(item => {
  item.addEventListener('mouseover', e => updateIndicator(e.target));
  item.addEventListener('click', e => {
    document.querySelector('.is-active')?.classList.remove('is-active');
    e.target.classList.add('is-active');
    updateIndicator(e.target);
  });
});

window.addEventListener('load', () => {
  const active = document.querySelector('.nav-item.is-active');
  if (active) updateIndicator(active);
});

window.addEventListener('resize', () => {
  const active = document.querySelector('.nav-item.is-active');
  if (active) updateIndicator(active);
});

// Menu mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});
