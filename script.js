const navToggle = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-nav]');
const navLabel = navToggle?.querySelector('.sr-only');

function setNavigation(open) {
  if (!navToggle || !navigation) return;
  navToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('nav-open', open);
  if (navLabel) navLabel.textContent = open ? 'Close navigation' : 'Open navigation';
}

navToggle?.addEventListener('click', () => {
  setNavigation(navToggle.getAttribute('aria-expanded') !== 'true');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNavigation(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setNavigation(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) setNavigation(false);
});

const copyButton = document.querySelector('[data-copy-citation]');
const copyStatus = document.querySelector('[data-copy-status]');
const citation = document.getElementById('repository-citation');

copyButton?.addEventListener('click', async () => {
  if (!citation) return;

  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    if (copyStatus) copyStatus.textContent = 'Copied';
  } catch {
    if (copyStatus) copyStatus.textContent = 'Select the text to copy';
  }

  window.setTimeout(() => {
    if (copyStatus) copyStatus.textContent = '';
  }, 1800);
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const linkedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && linkedSections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-18% 0px -70% 0px', threshold: 0 });

  linkedSections.forEach((section) => sectionObserver.observe(section));
}
