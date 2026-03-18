// 1. HERO SLIDER LOGIC
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000; // Changes every 5 seconds

function nextSlide() {
    // Remove active status from current
    slides[currentSlide].classList.remove('active');
    
    // Calculate next index
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active status to next
    slides[currentSlide].classList.add('active');
}

// Start the timer if slides exist
if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
}

// 2. SMOOTH SCROLL LOGIC
document.querySelector('.primary').addEventListener('click', function(e) {
    // Only scroll if the link is an anchor to #fundraiser
    if(this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector('#fundraiser');
        target.scrollIntoView({ behavior: 'smooth' });
    }
});

console.log("Adwa 1896 Site: Hero Slider & Navigation Initialized.");
