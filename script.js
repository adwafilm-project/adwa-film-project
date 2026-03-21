// 1. Hero Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function rotateSlides() {
    slides.forEach(s => s.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}
if (slides.length) setInterval(rotateSlides, 5000);

// 2. Mobile & Scroll FAB Logic
const fab = document.querySelector('.floating-join');
window.addEventListener('scroll', () => {
    fab.style.display = window.scrollY > 600 ? "flex" : "none";
});

// 3. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log("Adwa 1896: Complete 11-Block Architecture Live.");
