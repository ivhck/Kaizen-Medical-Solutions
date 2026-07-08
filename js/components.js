// components.js - Componentes reutilizables

// Función para renderizar el header
function renderNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const logoSrc = resolveSitePath(config.site?.logo || 'assets/images/Logo_Kaizen.png');

  navbar.innerHTML = `
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <a href="${resolveSitePath('./')}">
            <img src="${logoSrc}" alt="Kaizen Medical Solutions" class="navbar-logo">
          </a>
        </div>
        <button class="mobile-menu-toggle" id="mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="${resolveSitePath('./')}" class="nav-link">Inicio</a></li>
          <li><a href="${resolveSitePath('pages/servicios.html')}" class="nav-link">Servicios</a></li>
          <li><a href="${resolveSitePath('pages/nosotros.html')}" class="nav-link">Nosotros</a></li>
          <li><a href="${resolveSitePath('pages/recursos.html')}" class="nav-link">Recursos</a></li>
          <li><a href="${resolveSitePath('pages/contacto.html')}" class="nav-link">Contacto</a></li>
          <li><a href="${resolveSitePath('pages/contacto.html')}" class="nav-link nav-cta">Agenda una Consultoría</a></li>
        </ul>
      </nav>
    </div>
  `;

  // Toggle mobile menu
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

// Función para renderizar el footer
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer || !config.site) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <img src="${resolveSitePath('assets/images/Logo_Kaizen_white.png')}" alt="Kaizen Medical Solutions" class="footer-logo">
          <p>${config.site.description}</p>
          <ul class="social-links">
            <li><a href="#facebook" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#linkedin" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="#youtube" title="YouTube" aria-label="YouTube"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li><a href="${resolveSitePath('./')}">Inicio</a></li>
            <li><a href="${resolveSitePath('pages/servicios.html')}">Servicios</a></li>
            <li><a href="${resolveSitePath('pages/nosotros.html')}">Nosotros</a></li>
            <li><a href="${resolveSitePath('pages/recursos.html')}">Recursos</a></li>
            <li><a href="${resolveSitePath('pages/contacto.html')}">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4><i class="fas fa-phone"></i> Contacto</h4>
          <ul>
            <li><a href="tel:${config.site.phone}"><i class="fas fa-phone-alt"></i> ${config.site.phone}</a></li>
            <li><a href="mailto:${config.site.email}"><i class="fas fa-envelope"></i> ${config.site.email}</a></li>
            <li><p><i class="fas fa-map-marker-alt"></i> ${config.site.address}</p></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4><i class="fas fa-book"></i> Recursos</h4>
          <ul>
            <li><a href="${resolveSitePath('pages/recursos.html')}"><i class="fas fa-blog"></i> Blog</a></li>
            <li><a href="${resolveSitePath('pages/recursos.html')}"><i class="fas fa-download"></i> Descargas</a></li>
            <li><a href="#"><i class="fas fa-envelope-open"></i> Newsletter</a></li>
            <li><a href="#"><i class="fab fa-youtube"></i> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-links">
          <a href="#"><i class="fas fa-shield-alt"></i> Aviso de Privacidad</a>
          <a href="#"><i class="fas fa-cookie"></i> Política de Cookies</a>
          <a href="#"><i class="fas fa-file-contract"></i> Términos de Servicio</a>
        </div>
        <p><i class="fas fa-copyright"></i> 2024 Kaizen Medical Solutions. Todos los derechos reservados.</p>
      </div>
    </div>
  `;
}

// Inicializar componentes cuando el config está listo
function initComponents() {
  setTimeout(() => {
    renderNavbar();
    renderFooter();
  }, 100);
}

document.addEventListener('DOMContentLoaded', initComponents);
