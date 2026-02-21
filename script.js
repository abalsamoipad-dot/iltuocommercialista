/* ============================================
   IL TUO COMMERCIALISTA - Interactive Script
   Award-winning interactions & animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    initPreloader();
    initCustomCursor();
    initNavigation();
    initHeroAnimations();
    initParticles();
    initServiceCards();
    initScrollAnimations();
    initCounters();
    initFormHandling();
    initLucideIcons();
});

/* ============================================
   LUCIDE ICONS
   ============================================ */
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/* ============================================
   PRELOADER
   ============================================ */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const counter = preloader.querySelector('.preloader-counter');
    let count = 0;

    document.body.classList.add('loading');

    const interval = setInterval(() => {
        count += Math.random() * 15;
        if (count >= 100) {
            count = 100;
            clearInterval(interval);
            counter.textContent = '100%';

            setTimeout(() => {
                gsap.to(preloader, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        preloader.style.display = 'none';
                        document.body.classList.remove('loading');
                        animateHeroEntrance();
                    }
                });
            }, 400);
        } else {
            counter.textContent = Math.floor(count) + '%';
        }
    }, 80);
}

/* ============================================
   CUSTOM CURSOR
   ============================================ */
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (!cursor || !follower) return;

    // Check if touch device
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        followerX += (mouseX - followerX) * 0.08;
        followerY += (mouseY - followerY) * 0.08;

        cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
        follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .service-card, .news-card, .professional-card, input, select, textarea');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
        el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
    });
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile toggle
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 90 },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

/* ============================================
   HERO ANIMATIONS
   ============================================ */
function initHeroAnimations() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

function animateHeroEntrance() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.hero-badge', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    })
    .to('.hero-word', {
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
    }, '-=0.4')
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.5')
    .to('.hero-actions', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.4')
    .to('.hero-stats', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.3')
    .to('.hero-scroll', {
        opacity: 1,
        duration: 0.8,
    }, '-=0.2');
}

/* ============================================
   PARTICLES
   ============================================ */
function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        particle.style.width = (1 + Math.random() * 2) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

/* ============================================
   SERVICE CARDS TOGGLE
   ============================================ */
function initServiceCards() {
    document.querySelectorAll('.service-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.service-card');
            card.classList.toggle('expanded');

            const span = btn.querySelector('span');
            if (card.classList.contains('expanded')) {
                span.textContent = 'Chiudi';
            } else {
                span.textContent = 'Dettagli';
            }
        });
    });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    // Add reveal class to elements
    const revealElements = [
        '.section-header',
        '.section-tag',
        '.section-title',
        '.section-desc',
        '.about-text',
        '.about-visual',
        '.service-card',
        '.professional-card',
        '.news-card',
        '.info-card',
        '.cta-content',
        '.contact-form-wrapper',
        '.value'
    ];

    revealElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    delay: Math.min(i * 0.08, 0.4),
                }
            );
        });
    });

    // Parallax on hero gradient
    gsap.to('.hero-gradient', {
        y: 200,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        }
    });
}

/* ============================================
   STAT COUNTERS
   ============================================ */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function() {
                        const progress = this.progress();
                        counter.textContent = Math.floor(progress * target);
                    },
                    onComplete: () => {
                        counter.textContent = target;
                    }
                });
            }
        });
    });
}

/* ============================================
   FORM HANDLING
   ============================================ */
function initFormHandling() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Invio in corso...</span>';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.innerHTML = `
                    <div class="form-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        <h3>Messaggio Inviato!</h3>
                        <p>Grazie per averci contattato. Ti risponderemo il prima possibile.</p>
                    </div>
                `;
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
            alert('Si è verificato un errore. Riprova più tardi o contattaci direttamente via e-mail.');
        }
    });
}
