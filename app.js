const $ = (id) => document.getElementById(id);
$('year').textContent = new Date().getFullYear();
const menuToggle = $('menuToggle');
const nav = $('mainNav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));
document.querySelectorAll('[data-topic]').forEach(link => link.addEventListener('click', () => {
  $('topic').value = link.dataset.topic;
}));
$('enquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const topic = String(data.get('topic') || 'General consultation enquiry');
  const message = String(data.get('message') || '').trim();
  const body = [`Hello Gastro Skin Care, I'd like to make an appointment enquiry.`, `Name: ${name}`, phone ? `Phone: ${phone}` : '', `Enquiry: ${topic}`, message ? `Message: ${message}` : ''].filter(Boolean).join('\n');
  window.open('https://wa.me/918260180108?text=' + encodeURIComponent(body), '_blank', 'noopener');
});
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
