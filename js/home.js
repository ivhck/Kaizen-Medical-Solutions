// home.js - Lógica de la página de inicio

document.addEventListener('DOMContentLoaded', function () {
  // Esperar a que homeData esté disponible
  const waitForData = setInterval(() => {
    if (homeData && homeData.hero) {
      clearInterval(waitForData);
      renderHome();
    }
  }, 100);
});

function renderHome() {
  // Renderizar Hero
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.querySelector('.hero p');
  if (heroTitle) heroTitle.textContent = homeData.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = homeData.hero.subtitle;

  // Renderizar beneficios
  const benefitsList = document.getElementById('benefits-list');
  if (benefitsList && homeData.hero.benefits) {
    benefitsList.innerHTML = homeData.hero.benefits
      .map(benefit => `<li><i class="fas fa-check-circle"></i> ${benefit}</li>`)
      .join('');
  }

  // Renderizar problemas
  const problemsGrid = document.getElementById('problems-grid');
  if (problemsGrid && homeData.problems) {
    problemsGrid.innerHTML = homeData.problems.cards
      .map(problem => `
        <div class="problem-card">
          <p>${problem}</p>
        </div>
      `)
      .join('');
  }

  // Renderizar propuesta de valor
  const valueCards = document.getElementById('value-cards');
  if (valueCards && homeData.valueProposition) {
    valueCards.innerHTML = homeData.valueProposition
      .map(value => `
        <div class="value-card">
          <h3>${value.title}</h3>
          <p>${value.description}</p>
        </div>
      `)
      .join('');
  }

  // Renderizar servicios
  renderServicesHome();

  // Renderizar métricas
  const metricsGrid = document.getElementById('metrics-grid');
  if (metricsGrid && homeData.whyChooseUs) {
    metricsGrid.innerHTML = homeData.whyChooseUs.metrics
      .map(metric => `
        <div class="metric">
          <div class="metric-value">✓</div>
          <div class="metric-label">${metric}</div>
        </div>
      `)
      .join('');
  }

  // Renderizar CTA final
  const finalCta = document.getElementById('final-cta');
  if (finalCta && homeData.finalCta) {
    finalCta.innerHTML = `
      <h2>${homeData.finalCta.title}</h2>
      <a href="${resolveSitePath('pages/contacto.html')}" class="btn btn-secondary btn-lg">${homeData.finalCta.button}</a>
    `;
  }
}

function renderServicesHome() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid || !serviciosData.servicios) return;

  servicesGrid.innerHTML = serviciosData.servicios
    .slice(0, 5)
    .map(service => `
      <div class="service-card">
        <div class="service-image">
          <span>${getServiceIcon(service.id)}</span>
        </div>
        <div class="service-content">
          <div class="service-title">${service.title}</div>
          <div class="service-subtitle">${service.subtitle}</div>
          <div class="service-description">${service.description}</div>
          <a href="${resolveSitePath('pages/servicios.html')}#${service.id}" class="btn btn-primary btn-sm">Conocer más</a>
        </div>
      </div>
    `)
    .join('');
}

function getServiceIcon(id) {
  const icons = {
    'ingenieria-ergonomica': '🏭',
    'auditoria-stps': '✓',
    'defensa-prima-imss': '💰',
    'gestion-integral-riesgos': '⚙',
    'inteligencia-epidemiologica': '📊'
  };
  return icons[id] || '→';
}
