// Scroll Reveal Initialization
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});
    
// Corrected ScrollReveal calls
ScrollReveal().reveal(' .container', { origin: 'bottom' });
ScrollReveal().reveal('.about-text', { origin: 'left' });
ScrollReveal().reveal('.card', { origin: 'right' });