/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.zoom = "300%"; // ขยายหน้าจอเป็น 200%
  });
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = img.src;
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const totalSlides = slides.length;

  // คำนวณ index ใหม่
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // เลื่อน track ไปยังตำแหน่งใหม่
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
