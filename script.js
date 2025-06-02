// Mobile Navigation Toggle
 {
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
        navLinks.style.display = 'none';
        authButtons.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        authButtons.style.display = 'flex';
    }
});

// Res
function handleResize() {
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth > 992) {
        navLinks.style.display = 'flex';
        authButtons.style.display = 'flex';
        hamburger.style.display = 'none';
    } else {
        navLinks.style.display = 'none';
        authButtons.style.display = 'none';
        hamburger.style.display = 'block';
    }
}

window.addEventListener('resize', handleResize);
handleResize();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial slider for About page
if (document.querySelector('.testimonial-cards')) {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
    
    // Initialize
    showTestimonial(currentTestimonial);
}
