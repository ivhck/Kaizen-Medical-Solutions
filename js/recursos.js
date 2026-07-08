// recursos.js - Lógica de la página de recursos

document.addEventListener('DOMContentLoaded', function () {
  const waitForData = setInterval(() => {
    if (recursosData) {
      clearInterval(waitForData);
      renderRecursos();
    }
  }, 100);
});

function renderRecursos() {
  // Renderizar blog
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid && recursosData.blog_posts) {
    blogGrid.innerHTML = recursosData.blog_posts
      .slice(0, 6)
      .map(post => `
        <div class="card">
          <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); height: 150px; border-radius: var(--radius-lg); margin-bottom: var(--space-lg);"></div>
          <span style="display: inline-block; padding: var(--space-xs) var(--space-md); background-color: var(--light); color: var(--primary); font-size: var(--font-size-sm); font-weight: 600; border-radius: var(--radius-full); margin-bottom: var(--space-md);">${post.category}</span>
          <h3 class="card-title">${post.title}</h3>
          <p class="card-text">${post.excerpt}</p>
          <p style="font-size: var(--font-size-sm); color: var(--gray); margin-top: var(--space-md);">${post.date}</p>
          <a href="${resolveSitePath(post.url)}" class="btn btn-primary btn-sm" style="margin-top: var(--space-md);">Leer más</a>
        </div>
      `)
      .join('');
  }

  // Renderizar descargas
  const downloadsSection = document.getElementById('downloads-section');
  if (downloadsSection && recursosData.resources) {
    const downloads = recursosData.resources.downloads;
    let html = `<div class="grid-2" style="gap: var(--space-xl);">`;

    downloads.items.forEach(item => {
      html += `
        <div class="card">
          <h3 class="card-title">📄 ${item.name}</h3>
          <p class="card-text">Descarga gratuita en PDF o Excel</p>
          <a href="${resolveSitePath(`assets/downloads/${item.file}`)}" class="btn btn-primary btn-sm" download>Descargar</a>
        </div>
      `;
    });

    html += `</div>`;
    downloadsSection.innerHTML = html;
  }

  // Renderizar casos de éxito
  const casesGrid = document.getElementById('cases-grid');
  if (casesGrid && recursosData.success_stories) {
    casesGrid.innerHTML = recursosData.success_stories
      .map(caseItem => `
        <div class="card">
          <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); height: 150px; border-radius: var(--radius-lg); margin-bottom: var(--space-lg);"></div>
          <h3 class="card-title">${caseItem.company}</h3>
          <p style="font-size: var(--font-size-sm); color: var(--accent); font-weight: 600; margin-bottom: var(--space-md);">${caseItem.industry}</p>
          <div style="background-color: var(--light); padding: var(--space-md); border-radius: var(--radius-lg); margin-bottom: var(--space-md);">
            <p style="font-size: var(--font-size-sm); margin-bottom: var(--space-sm);"><strong>Reto:</strong> ${caseItem.challenge}</p>
            <p style="font-size: var(--font-size-sm); margin-bottom: var(--space-sm);"><strong>Resultado:</strong> ${caseItem.result}</p>
            <p style="font-size: var(--font-size-sm); color: var(--accent); font-weight: 600;"><strong>Impacto:</strong> ${caseItem.impact}</p>
          </div>
        </div>
      `)
      .join('');
  }
}
