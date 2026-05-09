// Copy BibTeX
document.getElementById('copy-bibtex').addEventListener('click', () => {
  const bibtex = document.querySelector('.bibtex code').innerText;
  navigator.clipboard.writeText(bibtex).then(() => {
    const btn = document.getElementById('copy-bibtex');
    const original = btn.textContent;
    btn.textContent = 'Copied ✓';
    setTimeout(() => { btn.textContent = original; }, 1500);
  });
});

// Smooth scroll for in-page links is handled by CSS scroll-behavior.
// Paper buttons currently link to '#' until the arXiv URL is known.
// If you want them to point at a PDF, set href on:
//   #paper-link  (hero CTA)
//   #paper-card  (resources card)
