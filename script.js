/**
 * QUOFFER LANDING PAGE - JavaScript
 * Interactive functionality for navigation and smooth scrolling
 */

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for # only links
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = document.querySelector('.nav-header').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add shadow to nav on scroll
let lastScroll = 0;
const navHeader = document.querySelector('.nav-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 10) {
        navHeader.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    } else {
        navHeader.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInside = mobileMenuBtn.contains(event.target) || mobileMenu.contains(event.target);
    
    if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

// Prevent body scroll when mobile menu is open (optional enhancement)
const body = document.body;
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.target === mobileMenu) {
            if (mobileMenu.classList.contains('hidden')) {
                body.style.overflow = '';
            } else {
                body.style.overflow = 'hidden';
            }
        }
    });
});

if (mobileMenu) {
    observer.observe(mobileMenu, {
        attributes: true,
        attributeFilter: ['class']
    });
}

// Performance: Lazy load images below the fold
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

console.log('Quoffer Landing Page loaded successfully ✅');
