// interactions.js - Interactividad avanzada (scroll reveal, etc)

document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initSmoothScroll();
});

// Scroll Reveal - Elementos que aparecen al hacer scroll
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.card, .service-card, .value-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scroll para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Cerrar menú móvil al hacer click en un link
document.addEventListener('click', function (e) {
    const navMenu = document.getElementById('nav-menu');
    const toggle = document.getElementById('mobile-toggle');

    if (navMenu && toggle) {
        if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});

// Highlighting de link activo en navegación
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = normalizePath(window.location.pathname);

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (normalizePath(href) === currentPath) {
            link.style.color = 'var(--primary)';
            link.style.fontWeight = '700';
        }
    });
}

function normalizePath(path) {
    try {
        const url = new URL(path, window.location.href);
        return url.pathname.replace(/index\.html$/, '').replace(/\/+$/, '/') || '/';
    } catch (error) {
        return path;
    }
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);

// Scroll to top button
function initScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.className = 'btn btn-primary';
    scrollButton.textContent = '↑';
    scrollButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    display: none;
    width: 50px;
    height: 50px;
    padding: 0;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
  `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        scrollButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', initScrollToTop);

// Analytics básico (Google Analytics, etc)
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_path': window.location.pathname
        });
    }
}

window.addEventListener('load', trackPageView);

// Validación de formularios
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--danger)';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--gray-light)';
        }
    });

    return isValid;
}

// Agregar validación en tiempo real
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = 'var(--danger)';
            } else {
                this.style.borderColor = 'var(--gray-light)';
            }
        });
    });
});
