// Cycle the three highlight colors across the page's text links.
// Excludes the site-name logo and the image card tiles (project/media),
// which have their own deliberate styling.
(function () {
  const linkColors = [
    'var(--color-highlight-red)',
    'var(--color-highlight-blue)',
    'var(--color-highlight-yellow)'
  ];
  let i = 0;
  document.querySelectorAll('a').forEach(link => {
    if (link.classList.contains('site-name')) return;
    if (link.closest('.project-card, .media-card')) return;
    link.style.color = linkColors[i++ % linkColors.length];
  });
})();
