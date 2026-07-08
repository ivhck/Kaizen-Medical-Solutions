// about.js - Lógica de la página "Nosotros"

document.addEventListener('DOMContentLoaded', function () {
    const waitForData = setInterval(() => {
        if (aboutData && aboutData.mission) {
            clearInterval(waitForData);
            renderAbout();
        }
    }, 100);
});

function renderAbout() {
    // Renderizar misión
    const missionText = document.getElementById('mission-text');
    if (missionText) missionText.textContent = aboutData.mission;

    // Renderizar visión
    const visionText = document.getElementById('vision-text');
    if (visionText) visionText.textContent = aboutData.vision;

    // Renderizar valores
    const valuesCards = document.getElementById('values-cards');
    if (valuesCards && aboutData.values) {
        valuesCards.innerHTML = aboutData.values
            .map(value => `
        <div class="value-card">
          <h3>${value.title}</h3>
          <p>${value.description}</p>
        </div>
      `)
            .join('');
    }

    // Renderizar diferencial
    const differentialList = document.getElementById('differential-list');
    if (differentialList && aboutData.differential) {
        differentialList.innerHTML = aboutData.differential
            .map(item => `
        <li style="padding: var(--space-md); background-color: var(--light); border-radius: var(--radius-lg); border-left: 4px solid var(--accent);">
          <strong>${item}</strong>
        </li>
      `)
            .join('');
    }
}
