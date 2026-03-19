// 1. Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// 2. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Simple Crypto Hook Placeholder
const connectBtn = document.getElementById('connect-wallet');
connectBtn.addEventListener('click', () => {
    alert("Crypto Wallet Connection Module Initializing...");
    // Later: await window.ethereum.request({ method: 'eth_requestAccounts' });
});
