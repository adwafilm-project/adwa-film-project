// 1. Cinematic Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function rotate() {
    slides.forEach(s => s.classList.remove('active'));
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
if(slides.length > 0) setInterval(rotate, 5000);

// 2. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 3. Floating Button Visibility Control
window.addEventListener('scroll', () => {
    const fab = document.querySelector('.floating-join');
    if(window.scrollY > 800) {
        fab.style.display = "flex";
    } else {
        fab.style.display = "none";
    }
});

// 4. Crypto Connection Placeholder
const walletBtn = document.getElementById('connect-wallet');
if(walletBtn) {
    walletBtn.addEventListener('click', () => {
        alert("Connecting to secure decentralized payment gateway...");
    });
}

console.log("Adwa 1896: Pixel-Perfect Deployment Initialized.");
