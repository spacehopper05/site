function showSection(id) {
  document.querySelectorAll('main section').forEach(sec =>
    sec.classList.remove('active')
  );
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}