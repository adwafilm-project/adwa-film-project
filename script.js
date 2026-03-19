// 1. Smooth Slide Transition
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(s => s.classList.remove('active'));
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 6000); 
}
showSlides();

// 2. Scroll Reveal Animation (Simple version)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.art-item, .funding-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// 3. Floating Button Visibility
window.addEventListener('scroll', () => {
    const fab = document.querySelector('.floating-join');
    if (window.scrollY > 500) {
        fab.style.display = 'flex';
    } else {
        fab.style.display = 'none';
    }
});
