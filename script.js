// This will later be used to connect MetaMask or other wallets
console.log("Adwa Film Project Site Loaded");

// Smooth scroll for the navigation
document.querySelector('.primary').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#fundraiser').scrollIntoView({ behavior: 'smooth' });
});