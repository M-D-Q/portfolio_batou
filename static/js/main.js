// Main JavaScript for Baptiste Berard Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Add animations on page load
    setTimeout(function() {
        document.querySelectorAll('.hero-content h1').forEach(el => {
            el.classList.add('fade-in');
        });
        
        setTimeout(function() {
            document.querySelectorAll('.hero-content h2').forEach(el => {
                el.classList.add('fade-in');
            });
        }, 200);
        
        setTimeout(function() {
            document.querySelectorAll('.skills-list').forEach(el => {
                el.classList.add('fade-in');
            });
        }, 400);
        
        setTimeout(function() {
            document.querySelectorAll('.hero-content .lead').forEach(el => {
                el.classList.add('fade-in');
            });
        }, 600);
        
        setTimeout(function() {
            document.querySelectorAll('.experience-number, .clients-list').forEach(el => {
                el.classList.add('fade-in');
            });
        }, 800);
        
        setTimeout(function() {
            document.querySelectorAll('.hero-buttons').forEach(el => {
                el.classList.add('fade-in');
            });
        }, 1000);
    }, 100);
    
    // Initialize animations based on data attributes
    const animationElements = document.querySelectorAll('[data-animation]');
    
    // Observer for scroll-based animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.dataset.animation;
                entry.target.classList.add(animationType);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements with animation data attributes
    animationElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Animate section titles
    document.querySelectorAll('.section-title').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Animate service cards with staggered delay
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${0.1 + (index * 0.1)}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
    
    // Animate showcase cards with staggered delay
    document.querySelectorAll('.showcase-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${0.1 + (index * 0.1)}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact section animations
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        item.style.transitionDelay = `${0.1 + (index * 0.1)}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(item);
    });
    
    // Interactive hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            icon.style.transform = '';
        });
    });
    
    // Badge hover animations
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add subtle floating animation to experience numbers
    document.querySelectorAll('.experience-number').forEach(el => {
        el.classList.add('pulse');
    });
});

// Client carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Clone items to create smooth infinite scroll
    const track = document.querySelector('.client-carousel-track');
    if (track) {
        const items = track.querySelectorAll('.client-item');
        
        // Clone each item and append to create the illusion of infinite scrolling
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }
    
    // Handle iframe loading to improve user experience
    document.querySelectorAll('iframe').forEach(iframe => {
        // Add loaded class once iframe is loaded
        iframe.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // For iframes that might be cached and already loaded
        if (iframe.complete) {
            iframe.classList.add('loaded');
        }
    });
});

// Original animations from main.js will go here (omitted for brevity)
// ...

// Additional function to dynamically adjust the client carousel based on screen size
function adjustClientCarousel() {
    const carousel = document.querySelector('.client-carousel-track');
    if (!carousel) return;
    
    const screenWidth = window.innerWidth;
    const animationDuration = screenWidth < 768 ? '20s' : '30s';
    
    carousel.style.animationDuration = animationDuration;
}

window.addEventListener('resize', adjustClientCarousel);
adjustClientCarousel(); // Call once on load


function openModal(platform, videoId) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    let src = '';
  
    if (platform === 'vimeo') {
      src = `https://player.vimeo.com/video/${videoId}?autoplay=1&controls=1`;
    } else if (platform === 'youtube') {
      src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
    }
  
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.allow = 'autoplay; fullscreen';
    iframe.allowFullscreen = true;
  
    container.innerHTML = '';
    container.appendChild(iframe);
    modal.style.display = 'flex'; // Use flex to center modal
  }
  
  function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('modalVideoContainer').innerHTML = '';
  }
  
  // Close modal if clicked outside
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('videoModal');
    if (e.target === modal) {
      closeModal();
    }
  });
  