const backToTop = document.getElementById('backToTop');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const animTitles = document.querySelectorAll('.anim-title');

function handleScroll() {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

  animTitles.forEach(title => {
    const rect = title.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      title.classList.add('visible');
    }
  });
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const isOpen = navMenu.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  });
});
