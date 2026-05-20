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

// Paper buttons currently point at '#' until the arXiv URL is known.
// When the paper is up, set href on:
//   #paper-link  (hero CTA)
//   #paper-card  (resources card)
