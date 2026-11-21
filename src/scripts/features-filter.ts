/** Category filter tabs for the cheat menu features explorer. */

function setActiveTab(root: HTMLElement, filter: string) {
  root.querySelectorAll<HTMLButtonElement>('[data-feature-filter]').forEach((tab) => {
    const active = tab.dataset.featureFilter === filter;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  root.querySelectorAll<HTMLElement>('[data-feature-category]').forEach((block) => {
    const show = filter === 'all' || block.dataset.featureCategory === filter;
    block.hidden = !show;
    block.classList.toggle('is-filtered-out', !show);
  });
}

function initFeaturesExplorer(root: HTMLElement) {
  if (root.dataset.featuresBound === 'true') return;
  root.dataset.featuresBound = 'true';

  root.addEventListener('click', (event) => {
    const tab = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>('[data-feature-filter]');
    if (!tab) return;
    const filter = tab.dataset.featureFilter;
    if (!filter) return;
    setActiveTab(root, filter);
  });
}

export function setupFeaturesExplorer() {
  const run = () => {
    document.querySelectorAll<HTMLElement>('[data-features-explorer]').forEach((root) => {
      if (!document.contains(root)) return;
      initFeaturesExplorer(root);
    });
  };

  run();
  document.addEventListener('astro:page-load', run);
  document.addEventListener('astro:after-swap', run);
}