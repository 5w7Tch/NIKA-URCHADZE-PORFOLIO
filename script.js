// ==========================================
// Portfolio JavaScript - Nika Urchadze
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initThemeToggle();
    initNavbar();
    initCursorBlob();
    initTerminalTyping();
    initScrollReveal();
    initProjectFilters();
    initSkillBars();
    initSmoothScroll();
});

// ==========================================
// Theme Toggle
// ==========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check for saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (!prefersDark) {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add animation
        themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
}

// ==========================================
// Navbar
// ==========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    });
}

// ==========================================
// Cursor Blob Effect
// ==========================================
function initCursorBlob() {
    const blob = document.getElementById('cursorBlob');

    if (!blob || window.innerWidth < 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let blobX = 0;
    let blobY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateBlob() {
        blobX += (mouseX - blobX) * 0.1;
        blobY += (mouseY - blobY) * 0.1;

        blob.style.left = `${blobX}px`;
        blob.style.top = `${blobY}px`;

        requestAnimationFrame(animateBlob);
    }

    animateBlob();

    // Hide blob when leaving window
    document.addEventListener('mouseleave', () => {
        blob.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        blob.style.opacity = '0.6';
    });
}

// ==========================================
// Terminal Typing Effect
// ==========================================
function initTerminalTyping() {
    const terminalText = document.getElementById('terminalText');
    if (!terminalText) return;

    const commands = [
        'npx create-awesome-portfolio',
        'npm run build:dreams',
        'git commit -m "Making magic"',
        'docker run innovation',
        'kubectl deploy success',
        'python train_ai_model.py',
        'cargo build --release',
        'go run create_impact.go'
    ];

    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentCommand = commands[commandIndex];

        if (isDeleting) {
            terminalText.textContent = currentCommand.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            terminalText.textContent = currentCommand.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentCommand.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            commandIndex = (commandIndex + 1) % commands.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// ==========================================
// Scroll Reveal Animations
// ==========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.about-content, .project-card, .skills-category, .timeline-item, .contact-content'
    );

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('reveal', 'active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
}

// ==========================================
// Project Filters
// ==========================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                const categories = card.dataset.category.split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ==========================================
// Skill Bars Animation
// ==========================================
function initSkillBars() {
    const skillsSection = document.getElementById('skills');
    const skillCategories = document.querySelectorAll('.skills-category');

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const progress = bar.dataset.progress;
                    setTimeout(() => {
                        bar.style.width = `${progress}%`;
                    }, 200);
                });

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateSkills, {
        threshold: 0.3
    });

    skillCategories.forEach(category => {
        observer.observe(category);
    });
}


// ==========================================
// Smooth Scroll
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should animate
document.querySelectorAll('.project-card, .timeline-item, .skills-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// ==========================================
// Easter Egg - Konami Code
// ==========================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s ease';

    const easterEggStyles = document.createElement('style');
    easterEggStyles.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(easterEggStyles);

    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);

    // Show a fun message
    console.log('🎮 Achievement Unlocked: Konami Code Master!');
}

// ==========================================
// Performance: Debounce scroll events
// ==========================================
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Additional scroll-based animations can go here
}, 10));

// ==========================================
// Preloader (Optional)
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    document.querySelectorAll('.animate-in').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});
