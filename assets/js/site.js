(() => {
  const search = document.querySelector('[data-collection-search]');
  if (!search) return;
  const cards = [...document.querySelectorAll('[data-entry]')];
  const empty = document.querySelector('[data-search-empty]');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      card.hidden = !card.textContent.toLocaleLowerCase().includes(query);
      if (!card.hidden) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  });
})();
