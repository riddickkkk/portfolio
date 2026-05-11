document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.clickable-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  images.forEach(img => {
    img.onclick = function() {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
    };
  });

  closeBtn.onclick = function() {
    lightbox.style.display = "none";
  };

  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links'); 

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});