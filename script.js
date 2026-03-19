// 1. CINEMATIC SLIDER LOGIC
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function rotateSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

if (slides.length > 0) {
    setInterval(rotateSlides, 5000); // Cross-fade every 5 seconds
}

// 2. SMOOTH ANCHOR SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3. FLOATING BUTTON VISIBILITY LOGIC
const fab = document.querySelector('.floating-join');
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        fab.style.opacity = "1";
        fab.style.pointerEvents = "auto";
        fab.style.transform = "translateY(0)";
    } else {
        fab.style.opacity = "0";
        fab.style.pointerEvents = "none";
        fab.style.transform = "translateY(20px)";
    }
});

// 4. CRYPTO WALLET HOOK (Placeholder)
const walletBtn = document.getElementById('connect-wallet');
walletBtn.addEventListener('click', () => {
    alert("Initiating secure connection to Web3 Wallet (MetaMask/WalletConnect)...");
});

console.log("Adwa 1896: 9-Block Epic Site Initialized Successfully.");
