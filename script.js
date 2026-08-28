document.getElementById('year').textContent = new Date().getFullYear();

const profileImage = document.querySelector('.profile-image');

profileImage?.addEventListener('click', () => {
  if (!window.matchMedia('(hover: none)').matches) return;

  const isRevealed = profileImage.classList.toggle('is-revealed');
  profileImage.setAttribute('aria-label', isRevealed ? 'Show pixel portrait' : 'Show profile photo');
});
