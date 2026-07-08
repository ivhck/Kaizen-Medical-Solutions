// servicios.js - Lógica de la página de servicios

document.addEventListener('DOMContentLoaded', function () {
  const waitForData = setInterval(() => {
    if (serviciosData && serviciosData.servicios) {
      clearInterval(waitForData);
      renderServicios();
    }
  }, 100);
});

function renderServicios() {
  const servicesDetail = document.getElementById('services-detail');
  if (!servicesDetail || !serviciosData.servicios) return;

  servicesDetail.innerHTML = serviciosData.servicios
    .map((service, index) => `
      <div id="${service.id}" style="margin-bottom: var(--space-3xl); padding-bottom: var(--space-3xl); border-bottom: ${index < serviciosData.servicios.length - 1 ? '1px solid var(--gray-light)' : 'none'};">
        <!-- Hero del servicio -->
        <div style="margin-bottom: var(--space-2xl);">
          <h2 class="text-primary" style="margin-bottom: var(--space-sm);">${service.title}</h2>
          <p style="font-size: var(--font-size-lg); color: var(--accent); font-weight: 600; margin-bottom: var(--space-md);">${service.subtitle}</p>
          <p style="font-size: var(--font-size-lg); color: var(--gray); margin-bottom: var(--space-lg);">${service.description}</p>
          <a href="${resolveSitePath('pages/contacto.html')}" class="btn btn-primary">Agenda una consultoría</a>
        </div>

        <!-- Grid de contenido -->
        <div class="grid-2" style="gap: var(--space-2xl); margin-top: var(--space-2xl);">
          <!-- ¿QUÉ RESUELVE? -->
          <div>
            <h3 class="text-primary" style="margin-bottom: var(--space-lg);">¿Qué problemas resuelve?</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-md);">
              ${service.problems.map(problem => `
                <li style="display: flex; gap: var(--space-md);">
                  <span style="color: var(--accent); font-weight: 700; min-width: 20px;">✓</span>
                  <span>${problem}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- ALCANCE TÉCNICO -->
          <div>
            <h3 class="text-primary" style="margin-bottom: var(--space-lg);">Alcance técnico</h3>
            <p>${service.scope}</p>
          </div>

          <!-- ENTREGABLES -->
          <div>
            <h3 class="text-primary" style="margin-bottom: var(--space-lg);">Entregables</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-md);">
              ${service.deliverables.map(item => `
                <li style="display: flex; gap: var(--space-md);">
                  <span style="color: var(--accent); font-weight: 700; min-width: 20px;">✔</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- BENEFICIOS / ROI -->
          <div>
            <h3 class="text-primary" style="margin-bottom: var(--space-lg);">Beneficios e impacto</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-md);">
              ${service.benefits.map(benefit => `
                <li style="display: flex; gap: var(--space-md);">
                  <span style="color: var(--accent); font-weight: 700; min-width: 20px;">→</span>
                  <span>${benefit}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section" style="margin-top: var(--space-2xl);">
          <h3>¿Interesado en este servicio?</h3>
          <a href="${resolveSitePath('pages/contacto.html')}" class="btn btn-secondary btn-lg">Solicitar evaluación</a>
        </div>
      </div>
    `)
    .join('');
}
