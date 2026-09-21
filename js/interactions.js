document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initRevealAnimations();
    initSmoothScroll();
    initScrollToTop();
    initParallax();
    initActiveNavLink();
    initFormValidation();
    initCalendlyBadge();
});

function initCalendlyBadge() {
    if (document.querySelector('.calendly-badge-widget')) {
        return;
    }

    const existingLink = document.querySelector('link[href*="calendly.com/assets/external/widget.css"]');
    if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        document.head.appendChild(link);
    }

    if (!window.Calendly) {
        const existingScript = document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            script.onload = function () {
                initCalendlyBadge();
            };
            document.head.appendChild(script);
        }
        return;
    }

    Calendly.initBadgeWidget({
        url: 'https://calendly.com/degmuz/15min',
        text: 'Agenda una\nconsultoría',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: false
    });

    const badge = document.querySelector('.calendly-badge-widget');
    if (!badge) {
        return;
    }

    badge.style.setProperty('position', 'fixed', 'important');
    badge.style.setProperty('left', '20px', 'important');
    badge.style.setProperty('right', 'auto', 'important');
    badge.style.setProperty('bottom', '15px', 'important');
    badge.style.setProperty('top', 'auto', 'important');
    badge.style.setProperty('z-index', '900', 'important');
    badge.style.setProperty('transform', 'none', 'important');

    const child = badge.querySelector('.calendly-badge-content');
    if (child) {
        child.style.setProperty('border-radius', '999px', 'important');
    }
}

function initMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const toggle = document.getElementById('mobile-toggle');

    if (!navMenu || !toggle) {
        return;
    }

    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
            navMenu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !toggle.contains(event.target)) {
            navMenu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

function initRevealAnimations() {
    const revealSelectors = [
        '[data-reveal]',
        '.card',
        '.service-card',
        '.value-card',
        '.problem-card',
        '.metric',
        '.feature-item',
        '.resource-card',
        '.contact-card',
        '.article-card',
        '.case-card',
        '.process-card',
        '.insight-card'
    ];

    const revealElements = document.querySelectorAll(revealSelectors.join(', '));

    if (!revealElements.length) {
        return;
    }

    revealElements.forEach(function (element, index) {
        if (!element.hasAttribute('data-reveal')) {
            element.setAttribute('data-reveal', 'true');
        }

        if (!element.style.transitionDelay) {
            element.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
        }
    });

    const observer = new IntersectionObserver(function (entries, currentObserver) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible', 'animate-fade-in');
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
    });

    revealElements.forEach(function (element) {
        observer.observe(element);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                return;
            }

            const target = document.querySelector(href);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initActiveNavLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = normalizePath(window.location.pathname);

    links.forEach(function (link) {
        const href = link.getAttribute('href');
        if (!href) {
            return;
        }

        const linkPath = normalizePath(href);
        const isActive = linkPath === currentPath;

        link.classList.toggle('is-active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
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

function initScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.className = 'scroll-top-button';
    scrollButton.type = 'button';
    scrollButton.setAttribute('aria-label', 'Volver al inicio');
    scrollButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    scrollButton.style.cssText = [
        'position: fixed',
        'bottom: 20px',
        'right: 20px',
        'z-index: 999',
        'display: none'
    ].join('; ');

    const whatsappButton = document.createElement('button');
    whatsappButton.type = 'button';
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.setAttribute('aria-label', 'Abrir chat de WhatsApp');
    whatsappButton.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    whatsappButton.style.cssText = [
        'position: fixed',
        'bottom: 20px',
        'right: 88px',
        'z-index: 999',
        'display: inline-flex'
    ].join('; ');

    const whatsappModal = document.createElement('div');
    whatsappModal.className = 'whatsapp-chat-modal';
    whatsappModal.innerHTML = `
        <div class="whatsapp-chat-header">
            <span class="chat-title">WhatsApp</span>
            <button type="button" class="chat-close" aria-label="Cerrar chat">×</button>
        </div>
        <div class="whatsapp-chat-body">
            <p>Escríbenos y te responderemos al instante.</p>
            <form class="whatsapp-chat-form">
                <textarea placeholder="Hola, quiero más información...">Hola Kaizen Medical Solutions, quiero más información.</textarea>
                <button type="submit" class="whatsapp-send-btn">Enviar</button>
            </form>
        </div>
    `;

    const closeChat = function () {
        whatsappModal.classList.remove('is-open');
    };

    whatsappButton.addEventListener('click', function () {
        whatsappModal.classList.toggle('is-open');
        const textarea = whatsappModal.querySelector('textarea');
        if (textarea) {
            textarea.focus();
        }
    });

    whatsappModal.querySelector('.chat-close').addEventListener('click', closeChat);
    whatsappModal.querySelector('.whatsapp-chat-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const textarea = whatsappModal.querySelector('textarea');
        const message = (textarea ? textarea.value.trim() : '') || 'Hola Kaizen Medical Solutions, quiero más información.';
        const whatsappUrl = 'https://wa.me/528182055612?text=' + encodeURIComponent(message);
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        closeChat();
    });

    document.body.appendChild(whatsappModal);
    document.body.appendChild(whatsappButton);
    document.body.appendChild(scrollButton);

    let visible = false;

    const updateVisibility = function () {
        const shouldShow = window.scrollY > 320;
        if (shouldShow === visible) {
            return;
        }

        visible = shouldShow;
        scrollButton.style.display = shouldShow ? 'inline-flex' : 'none';
    };

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();

    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initParallax() {
    const elements = document.querySelectorAll('[data-parallax]');

    if (!elements.length) {
        return;
    }

    const states = Array.from(elements).map(function (element) {
        return {
            element: element,
            speed: Number(element.dataset.parallaxSpeed || 0.18),
            direction: element.dataset.parallaxDirection === 'up' ? -1 : 1
        };
    });

    let ticking = false;

    const update = function () {
        const scrollY = window.scrollY || window.pageYOffset;
        states.forEach(function (state) {
            const offset = scrollY * state.speed * state.direction;
            state.element.style.transform = `translate3d(0, ${offset}px, 0)`;
        });
        ticking = false;
    };

    const requestTick = function () {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    requestTick();
}

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    if (!forms.length) {
        return;
    }

    forms.forEach(function (form) {
        const requiredFields = form.querySelectorAll('input[required], textarea[required], select[required]');

        requiredFields.forEach(function (field) {
            field.addEventListener('blur', function () {
                toggleFieldState(field);
            });
        });

        form.addEventListener('submit', function (event) {
            let valid = true;

            requiredFields.forEach(function (field) {
                if (!toggleFieldState(field)) {
                    valid = false;
                }
            });

            if (!valid) {
                event.preventDefault();
            }
        });
    });
}

function toggleFieldState(field) {
    const isValid = Boolean(field.value && field.value.trim());
    field.classList.toggle('is-invalid', !isValid);
    return isValid;
}

window.addEventListener('load', function () {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: window.location.pathname
        });
    }
});