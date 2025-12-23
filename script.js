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
    initProjectsSphere();
    initSphereNavOverlay();
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
// Sphere Navigation Overlay
// ==========================================
function initSphereNavOverlay() {
    const heroSection = document.getElementById('hero');
    const projectsSection = document.getElementById('projects');
    const sphereHeader = document.getElementById('projectsSphereHeader');
    const sphereNavOverlay = document.getElementById('sphereNavOverlay');
    const sphereNavLogo = document.getElementById('sphereNavLogo');
    const sphereThemeToggle = document.getElementById('sphereThemeToggle');
    const mainNavbar = document.getElementById('navbar');
    const mainThemeToggle = document.getElementById('themeToggle');

    if (!projectsSection || !sphereHeader || !sphereNavOverlay || !heroSection) return;

    function updateOverlayVisibility() {
        const heroRect = heroSection.getBoundingClientRect();

        // Check if we've scrolled past the hero section
        const pastHero = heroRect.bottom < 0;

        if (pastHero) {
            // Hide the header and main navbar, show overlay
            sphereHeader.classList.add('hidden');
            sphereNavOverlay.classList.add('visible');
            mainNavbar.style.opacity = '0';
            mainNavbar.style.pointerEvents = 'none';
            mainThemeToggle.style.opacity = '0';
            mainThemeToggle.style.pointerEvents = 'none';
        } else {
            // Show header and main navbar, hide overlay
            sphereHeader.classList.remove('hidden');
            sphereNavOverlay.classList.remove('visible');
            mainNavbar.style.opacity = '';
            mainNavbar.style.pointerEvents = '';
            mainThemeToggle.style.opacity = '';
            mainThemeToggle.style.pointerEvents = '';
        }
    }

    // Logo click - scroll to top
    sphereNavLogo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Theme toggle functionality for overlay button
    sphereThemeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add animation
        sphereThemeToggle.style.transform = 'scale(0.8) rotate(180deg)';
        setTimeout(() => {
            sphereThemeToggle.style.transform = '';
        }, 300);
    });

    // Listen for scroll
    window.addEventListener('scroll', updateOverlayVisibility, { passive: true });

    // Initial check
    updateOverlayVisibility();
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
// 3D Projects Sphere
// ==========================================
function initProjectsSphere() {
    const container = document.getElementById('sphere-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    // Project Data
    const projects = [
        {
            title: "Email SaaS Platform",
            description: "SaaS platform for purchasing, managing, and health-tracking email accounts at scale.",
            icon: "fas fa-envelope-open-text",
            tags: ["FastAPI", "React", "PostgreSQL"],
            link: null,
            github: null,
            private: true
        },
        {
            title: "CycleGAN Monet",
            description: "Implemented CycleGAN from scratch for Kaggle competition with ResNet generators.",
            icon: "fas fa-palette",
            tags: ["PyTorch", "Python", "WandB"],
            link: "https://www.kaggle.com/competitions/gan-getting-started",
            github: "https://github.com/5w7Tch/monet-cyclegan"
        },
        {
            title: "Lead Generation System",
            description: "Full-stack system for lead filtering and email enrichment. Saved thousands for the company.",
            icon: "fas fa-search-dollar",
            tags: ["FastAPI", "React", "SQLAlchemy"],
            link: null,
            github: null,
            private: true
        },
        {
            title: "Quiz Social Platform",
            description: "Social network for quizzes with 10+ question types and competitive leaderboards.",
            icon: "fas fa-question-circle",
            tags: ["Java", "JSP", "MySQL"],
            link: null,
            github: "https://github.com/5w7Tch/PowerRangers"
        },
        {
            title: "iOS Weather App",
            description: "Weather app with automatic location detection and manual city search.",
            icon: "fas fa-cloud-sun",
            tags: ["Swift", "UIKit", "CoreLocation"],
            link: null,
            github: "https://github.com/5w7Tch/IOS_Weather_APP"
        },
        {
            title: "Interactive Book Portfolio",
            description: "Portfolio with realistic page-flip animations and optimized PDF loading.",
            icon: "fas fa-book-open",
            tags: ["JavaScript", "PDF.js", "Canvas"],
            link: "https://salomeshengelaia.site/",
            github: "https://github.com/5w7Tch/Salome-Shengelaia-portfolio"
        },
        {
            title: "NAND to Tetris HDL",
            description: "Built entire computing system from NAND gates up with HDL parser.",
            icon: "fas fa-microchip",
            tags: ["HDL", "Assembly", "Python"],
            link: null,
            github: "https://github.com/5w7Tch/HLD_nand_final"
        },
        {
            title: "RISC-V Interpreter",
            description: "CPU interpreter simulating processor-register interactions.",
            icon: "fas fa-terminal",
            tags: ["Python", "RISC-V", "Assembly"],
            link: null,
            github: null,
            university: true
        },
        {
            title: "RISC-V OS Development",
            description: "Operating system syscalls with Copy-on-Write optimization.",
            icon: "fas fa-cogs",
            tags: ["C", "RISC-V", "OS Design"],
            link: null,
            github: null,
            university: true
        },
        {
            title: "Market API Backend",
            description: "Backend for cashiers with sales management and currency converter.",
            icon: "fas fa-cash-register",
            tags: ["Java", "Spring", "REST API"],
            link: null,
            github: "https://github.com/5w7Tch/Market-API"
        },
        {
            title: "Email Tagging System",
            description: "System to organize email fleets with parallel tagging. Hours to seconds.",
            icon: "fas fa-tags",
            tags: ["FastAPI", "React", "PostgreSQL"],
            link: null,
            github: null,
            private: true
        }
    ];

    // Global variables
    let scene, camera, renderer, sphere, raycaster, mouse;
    let originalPositions = [];
    let targetPositions = [];
    let triangleMeshes = [];
    let projectCardElements = [];
    let project3DPositions = [];
    let isMouseDown = false;
    let mouseX = 0, mouseY = 0;
    let targetRotationX = 0, targetRotationY = 0;
    let currentRotationX = 0, currentRotationY = 0;
    let autoRotate = true;
    let autoRotateSpeed = 0.0008;
    let clock = new THREE.Clock();
    const sphereRadius = 2.2;
    let isInView = false;

    // Initialize
    function init() {
        // Scene
        scene = new THREE.Scene();

        // Get theme-appropriate background
        const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
        scene.background = new THREE.Color(isDarkMode ? 0x0a0a0a : 0xfafafa);

        // Camera - adjust for mobile
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 480;
        const isLandscape = window.innerHeight < 500 && window.innerWidth > window.innerHeight;

        let cameraZ = 6;
        let fov = 60;

        if (isSmallMobile) {
            cameraZ = 8;
            fov = 65;
        } else if (isMobile) {
            cameraZ = 7.5;
            fov = 62;
        } else if (isLandscape) {
            cameraZ = 7;
            fov = 55;
        }

        camera = new THREE.PerspectiveCamera(fov, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = cameraZ;

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Raycaster
        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();

        // Create geodesic sphere
        createGeodesicSphere();

        // Create particles
        createParticles();

        // Create project cards
        createProjectCards();
        createProjectIndicators();

        // Events
        window.addEventListener('resize', onWindowResize);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mousedown', onMouseDown);
        container.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mouseleave', onMouseUp);

        // Touch events for mobile
        container.addEventListener('touchstart', onTouchStart, { passive: false });
        container.addEventListener('touchmove', onTouchMove, { passive: false });
        container.addEventListener('touchend', onTouchEnd);

        // Intersection observer for performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isInView = entry.isIntersecting;
            });
        }, { threshold: 0.1 });

        observer.observe(container);

        // Listen for theme changes
        const themeObserver = new MutationObserver(() => {
            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
            scene.background = new THREE.Color(isDark ? 0x0a0a0a : 0xfafafa);
            updateTriangleColors(isDark);
        });
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        animate();
    }

    function updateTriangleColors(isDark) {
        const edgeColor = isDark ? 0xffffff : 0x000000;
        const edgeOpacity = isDark ? 0.08 : 0.12;

        triangleMeshes.forEach(mesh => {
            mesh.material.opacity = isDark ? 0.015 : 0.02;
            if (mesh.userData.edges) {
                mesh.userData.edges.material.color.setHex(edgeColor);
                mesh.userData.edges.material.opacity = edgeOpacity;
                mesh.userData.baseEdgeOpacity = edgeOpacity;
            }
        });
    }

    function createGeodesicSphere() {
        const detail = 6;
        const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';

        const icosahedronGeometry = new THREE.IcosahedronGeometry(sphereRadius, detail);
        const geometry = icosahedronGeometry.toNonIndexed();
        const positions = geometry.attributes.position.array;

        // Store original positions
        for (let i = 0; i < positions.length; i += 9) {
            const triangle = {
                v1: new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]),
                v2: new THREE.Vector3(positions[i + 3], positions[i + 4], positions[i + 5]),
                v3: new THREE.Vector3(positions[i + 6], positions[i + 7], positions[i + 8])
            };
            originalPositions.push(triangle);
            targetPositions.push({
                v1: triangle.v1.clone(),
                v2: triangle.v2.clone(),
                v3: triangle.v3.clone(),
                offset: 0,
                targetOffset: 0
            });
        }

        // Create sphere group
        sphere = new THREE.Group();

        for (let i = 0; i < originalPositions.length; i++) {
            const triangleGeometry = new THREE.BufferGeometry();
            const vertices = new Float32Array([
                originalPositions[i].v1.x, originalPositions[i].v1.y, originalPositions[i].v1.z,
                originalPositions[i].v2.x, originalPositions[i].v2.y, originalPositions[i].v2.z,
                originalPositions[i].v3.x, originalPositions[i].v3.y, originalPositions[i].v3.z
            ]);

            triangleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
            triangleGeometry.computeVertexNormals();

            const material = new THREE.MeshBasicMaterial({
                color: isDarkMode ? 0xffffff : 0x000000,
                transparent: true,
                opacity: isDarkMode ? 0.015 : 0.02,
                side: THREE.DoubleSide
            });

            const mesh = new THREE.Mesh(triangleGeometry, material);
            mesh.userData.index = i;

            // Edges
            const edgeGeometry = new THREE.EdgesGeometry(triangleGeometry);
            const edgeMaterial = new THREE.LineBasicMaterial({
                color: isDarkMode ? 0xffffff : 0x000000,
                transparent: true,
                opacity: isDarkMode ? 0.08 : 0.12
            });
            const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
            mesh.add(edges);
            mesh.userData.edges = edges;
            mesh.userData.baseEdgeOpacity = isDarkMode ? 0.08 : 0.12;

            sphere.add(mesh);
            triangleMeshes.push(mesh);
        }

        scene.add(sphere);
    }

    function createParticles() {
        const particleCount = 800;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const radius = 4 + Math.random() * 12;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
        const material = new THREE.PointsMaterial({
            color: isDarkMode ? 0xffffff : 0x000000,
            size: 0.015,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);
    }

    function createProjectCards() {
        const cardsContainer = document.getElementById('sphereProjectCards');

        // Distribute projects on a sphere using Fibonacci sphere algorithm
        const n = projects.length;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;

        projects.forEach((project, index) => {
            // Fibonacci sphere distribution - fixed positions on sphere surface
            const i = index + 0.5;
            const phi = Math.acos(1 - 2 * i / n);
            const theta = 2 * Math.PI * i / goldenRatio;

            // Fixed radius - cards are attached to sphere surface
            const attachedRadius = sphereRadius + 0.3;

            // Calculate fixed 3D position (local to sphere)
            const x = attachedRadius * Math.sin(phi) * Math.cos(theta);
            const y = attachedRadius * Math.cos(phi);
            const z = attachedRadius * Math.sin(phi) * Math.sin(theta);

            // Store fixed position on sphere surface
            project3DPositions.push({
                theta: theta,
                phi: phi,
                attachedRadius: attachedRadius,
                localPosition: new THREE.Vector3(x, y, z),
                normal: new THREE.Vector3(x, y, z).normalize()
            });

            const card = document.createElement('div');
            card.className = 'sphere-project-card hidden';
            card.innerHTML = `
                <div class="sphere-card-header">
                    <div class="sphere-card-icon">
                        <i class="${project.icon}"></i>
                    </div>
                    <div class="sphere-card-links">
                        ${project.link ? `<a href="${project.link}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        ${project.github ? `<a href="${project.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
                        ${project.private ? `<span title="Private"><i class="fas fa-lock"></i></span>` : ''}
                        ${project.university ? `<span title="University"><i class="fas fa-university"></i></span>` : ''}
                    </div>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="sphere-card-tags">
                    ${project.tags.map(tag => `<span class="sphere-card-tag">${tag}</span>`).join('')}
                </div>
            `;

            card.dataset.index = index;
            cardsContainer.appendChild(card);
            projectCardElements.push(card);
        });
    }

    function createProjectIndicators() {
        const indicatorContainer = document.getElementById('sphereProjectIndicator');
        projects.forEach((project, index) => {
            const item = document.createElement('div');
            item.className = 'sphere-indicator-item';

            const title = document.createElement('span');
            title.className = 'sphere-indicator-title';
            title.textContent = project.title;

            const dot = document.createElement('div');
            dot.className = 'sphere-indicator-dot';

            item.appendChild(title);
            item.appendChild(dot);
            item.addEventListener('click', () => rotateToProject(index));
            indicatorContainer.appendChild(item);
        });
    }

    function rotateToProject(index) {
        const pos = project3DPositions[index];

        // Get the local position of the project on the sphere
        const localPos = pos.localPosition.clone();

        // Calculate the rotation needed to bring this point to face the camera (positive Z)
        // We need to find Y rotation first (horizontal angle)
        targetRotationY = -Math.atan2(localPos.x, localPos.z);

        // After Y rotation, the point will be in the XZ plane aligned with Z
        // Now calculate X rotation needed to bring it to center
        const horizontalDist = Math.sqrt(localPos.x * localPos.x + localPos.z * localPos.z);
        targetRotationX = -Math.atan2(localPos.y, horizontalDist);

        // Clamp X rotation to prevent flipping
        targetRotationX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, targetRotationX));

        autoRotate = false;
        setTimeout(() => autoRotate = true, 5000);
    }

    function updateTriangleHover() {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(triangleMeshes);

        triangleMeshes.forEach((mesh, index) => {
            targetPositions[index].targetOffset = 0;
        });

        if (intersects.length > 0) {
            const intersectedMesh = intersects[0].object;
            const index = intersectedMesh.userData.index;

            const center = new THREE.Vector3();
            center.addVectors(originalPositions[index].v1, originalPositions[index].v2);
            center.add(originalPositions[index].v3);
            center.divideScalar(3);

            triangleMeshes.forEach((mesh, i) => {
                const triCenter = new THREE.Vector3();
                triCenter.addVectors(originalPositions[i].v1, originalPositions[i].v2);
                triCenter.add(originalPositions[i].v3);
                triCenter.divideScalar(3);

                const distance = center.distanceTo(triCenter);
                const maxDistance = 0.6;

                if (distance < maxDistance) {
                    const influence = 1 - (distance / maxDistance);
                    const wobble = Math.sin(clock.getElapsedTime() * 10 + i) * 0.02;
                    targetPositions[i].targetOffset = influence * 0.1 + wobble * influence;
                }
            });
        }
    }

    function updateTrianglePositions() {
        const time = clock.getElapsedTime();
        const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';

        triangleMeshes.forEach((mesh, index) => {
            const positions = mesh.geometry.attributes.position.array;
            const original = originalPositions[index];
            const target = targetPositions[index];

            target.offset += (target.targetOffset - target.offset) * 0.1;

            const center = new THREE.Vector3();
            center.addVectors(original.v1, original.v2);
            center.add(original.v3);
            center.divideScalar(3);
            const normal = center.clone().normalize();

            const wave = Math.sin(time * 1.5 + index * 0.05) * 0.003;
            const totalOffset = target.offset + wave;

            mesh.material.opacity = (isDarkMode ? 0.015 : 0.02) + target.offset * 0.3;
            mesh.userData.edges.material.opacity = mesh.userData.baseEdgeOpacity + target.offset * 1.5;

            const v1 = original.v1.clone().add(normal.clone().multiplyScalar(totalOffset));
            const v2 = original.v2.clone().add(normal.clone().multiplyScalar(totalOffset));
            const v3 = original.v3.clone().add(normal.clone().multiplyScalar(totalOffset));

            positions[0] = v1.x; positions[1] = v1.y; positions[2] = v1.z;
            positions[3] = v2.x; positions[4] = v2.y; positions[5] = v2.z;
            positions[6] = v3.x; positions[7] = v3.y; positions[8] = v3.z;

            mesh.geometry.attributes.position.needsUpdate = true;

            const edgeGeometry = new THREE.EdgesGeometry(mesh.geometry);
            mesh.userData.edges.geometry.dispose();
            mesh.userData.edges.geometry = edgeGeometry;
        });
    }

    function updateProjectCards() {
        projectCardElements.forEach((card, index) => {
            const pos = project3DPositions[index];

            const point = pos.localPosition.clone();
            point.applyAxisAngle(new THREE.Vector3(1, 0, 0), currentRotationX);
            point.applyAxisAngle(new THREE.Vector3(0, 1, 0), currentRotationY);

            const projected = point.clone().project(camera);

            const rect = container.getBoundingClientRect();
            const x = (projected.x * 0.5 + 0.5) * rect.width;
            const y = (-projected.y * 0.5 + 0.5) * rect.height;

            const zThreshold = 0.3;
            let opacity = 0;
            if (point.z > zThreshold) {
                opacity = Math.max(0, Math.min(1, (point.z - zThreshold) / 1.5));
            }

            const zoomFactor = 6 / camera.position.z;
            const depthScale = 0.6 + (point.z / pos.attachedRadius) * 0.4;
            const scale = Math.max(0.4, depthScale * zoomFactor);

            const cardRotateY = Math.atan2(point.x, point.z) * (180 / Math.PI) * 0.2;
            const cardRotateX = Math.atan2(-point.y, Math.sqrt(point.x * point.x + point.z * point.z)) * (180 / Math.PI) * 0.15;

            // Adjust card offset based on screen size
            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 480;
            let cardOffsetX = 90;
            let cardOffsetY = 70;

            if (isSmallMobile) {
                cardOffsetX = 60;
                cardOffsetY = 50;
            } else if (isMobile) {
                cardOffsetX = 70;
                cardOffsetY = 55;
            }

            card.style.left = (x - cardOffsetX) + 'px';
            card.style.top = (y - cardOffsetY) + 'px';
            card.style.opacity = opacity;
            card.style.transform = `scale(${scale}) rotateY(${cardRotateY}deg) rotateX(${cardRotateX}deg)`;
            card.style.zIndex = Math.floor((point.z + 5) * 20);

            if (opacity > 0.05) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }

            const items = document.querySelectorAll('.sphere-indicator-item');
            if (items[index]) {
                items[index].classList.toggle('active', opacity > 0.5);
            }
        });
    }

    function onWindowResize() {
        // Adjust camera for mobile on resize
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 480;
        const isLandscape = window.innerHeight < 500 && window.innerWidth > window.innerHeight;

        let cameraZ = 6;
        let fov = 60;

        if (isSmallMobile) {
            cameraZ = 8;
            fov = 65;
        } else if (isMobile) {
            cameraZ = 7.5;
            fov = 62;
        } else if (isLandscape) {
            cameraZ = 7;
            fov = 55;
        }

        camera.fov = fov;
        camera.position.z = cameraZ;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function onMouseMove(event) {
        const rect = container.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        if (isMouseDown) {
            const deltaX = event.clientX - mouseX;
            const deltaY = event.clientY - mouseY;
            targetRotationY += deltaX * 0.005;
            targetRotationX += deltaY * 0.003;
            targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));
        }

        mouseX = event.clientX;
        mouseY = event.clientY;
    }

    function onMouseDown(event) {
        isMouseDown = true;
        autoRotate = false;
        container.style.cursor = 'grabbing';
    }

    function onMouseUp() {
        isMouseDown = false;
        container.style.cursor = 'crosshair';
        setTimeout(() => autoRotate = true, 2000);
    }

    // Touch event handlers for mobile
    let touchStartX = 0, touchStartY = 0;

    function onTouchStart(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            isMouseDown = true;
            autoRotate = false;
            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
        }
    }

    function onTouchMove(event) {
        if (event.touches.length === 1 && isMouseDown) {
            event.preventDefault();
            const touchX = event.touches[0].clientX;
            const touchY = event.touches[0].clientY;

            const deltaX = touchX - touchStartX;
            const deltaY = touchY - touchStartY;

            targetRotationY += deltaX * 0.008;
            targetRotationX += deltaY * 0.005;
            targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));

            touchStartX = touchX;
            touchStartY = touchY;
        }
    }

    function onTouchEnd() {
        isMouseDown = false;
        setTimeout(() => autoRotate = true, 2000);
    }

    function animate() {
        requestAnimationFrame(animate);

        if (!isInView) return;

        if (autoRotate) {
            targetRotationY += autoRotateSpeed;
        }

        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        sphere.rotation.x = currentRotationX;
        sphere.rotation.y = currentRotationY;

        updateTriangleHover();
        updateTrianglePositions();
        updateProjectCards();

        renderer.render(scene, camera);
    }

    // Start
    init();
}

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
