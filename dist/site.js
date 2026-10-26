(() => {
  'use strict';
  const config = window.AFCON_CONFIG || {};
  document.querySelectorAll('[data-image]').forEach(img => {
    const item = config.images?.[img.dataset.image];
    if (item?.src) img.src = item.src;
    if (item?.alt) img.alt = item.alt;
  });
  document.querySelectorAll('[data-caption]').forEach(node => {
    const caption = config.images?.[node.dataset.caption]?.caption;
    if (caption) node.textContent = caption;
  });
  if (config.phone?.international) {
    document.querySelectorAll('[data-call], [data-phone-display]').forEach(a => a.href = 'tel:' + config.phone.international);
    document.querySelectorAll('[data-sms]').forEach(a => a.href = 'sms:' + config.phone.international);
  }
  if (config.phone?.display) document.querySelectorAll('[data-phone-display]').forEach(a => a.textContent = config.phone.display);
  if (config.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
    const target = document.getElementById('email-contact');
    const link = document.createElement('a'); link.href = 'mailto:' + config.email; link.textContent = config.email;
    target.replaceChildren(link); target.hidden = false;
  }
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');
  toggle.hidden = false;
  function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); } });
  const desktop = window.matchMedia('(min-width: 761px)'); desktop.addEventListener('change', closeMenu);
  document.getElementById('year').textContent = new Date().getFullYear();
})();
