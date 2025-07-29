
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('nbeauty-overlay');
  const openBtn = document.getElementById('nbeauty-toggle-btn');
  const closeBtns = document.querySelectorAll('#nbeauty-close-btn, #nbeauty-close-btn-2');

  if (!overlay || !openBtn) return;

  const showOverlay = () => {
    console.log("Btn trigger");
    overlay.style.display = 'flex';
    overlay.style.transform = 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    overlay.style.transformStyle = 'preserve-3d';
  };

  const hideOverlay = () => {
    overlay.style.display = 'none';
    // Optional: Reset transform if needed
    overlay.style.transform = 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
    overlay.style.transformStyle = '';
  };

  openBtn.addEventListener('click', showOverlay);
  closeBtns.forEach(btn => btn.addEventListener('click', hideOverlay));
});
