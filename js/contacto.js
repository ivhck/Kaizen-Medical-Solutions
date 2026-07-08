// contacto.js - Lógica de la página de contacto

document.addEventListener('DOMContentLoaded', function () {
    const waitForData = setInterval(() => {
        if (contactoData) {
            clearInterval(waitForData);
            renderContacto();
        }
    }, 100);
});

function renderContacto() {
    // Renderizar formulario
    const formFields = document.getElementById('form-fields');
    if (formFields && contactoData.form) {
        formFields.innerHTML = contactoData.form.fields
            .map(field => {
                if (field.type === 'textarea') {
                    return `
            <div class="form-group">
              <label for="${field.name}" class="form-label">${field.label}${field.required ? ' *' : ''}</label>
              <textarea id="${field.name}" name="${field.name}" class="form-control" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}></textarea>
            </div>
          `;
                } else {
                    return `
            <div class="form-group">
              <label for="${field.name}" class="form-label">${field.label}${field.required ? ' *' : ''}</label>
              <input type="${field.type}" id="${field.name}" name="${field.name}" class="form-control" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>
            </div>
          `;
                }
            })
            .join('');
    }

    // Manejar envío del formulario
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener datos del formulario
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simular envío (en producción, enviar a un servidor)
            console.log('Datos del formulario:', data);

            const formMessage = document.getElementById('form-message');
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';
            formMessage.style.padding = 'var(--space-md)';
            formMessage.style.borderRadius = 'var(--radius-lg)';
            formMessage.innerHTML = '✓ Gracias por tu mensaje. Nos pondremos en contacto pronto.';

            contactForm.reset();

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Renderizar Calendly
    const calendlyEmbed = document.getElementById('calendly-embed');
    if (calendlyEmbed && contactoData.scheduling && contactoData.scheduling.integrations.calendly) {
        const calendlyUrl = contactoData.scheduling.integrations.calendly.embed_url;
        calendlyEmbed.innerHTML = `
      <div class="calendly-inline-widget" data-url="${calendlyUrl}"></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    `;
    }

    // Renderizar información de contacto
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo && contactoData.info) {
        contactInfo.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: var(--space-lg);">
        <div style="padding: var(--space-lg); background-color: var(--light); border-radius: var(--radius-lg);">
          <p style="font-size: var(--font-size-sm); color: var(--gray); margin-bottom: var(--space-sm);">Teléfono</p>
          <a href="tel:${contactoData.info.phone}" style="font-size: var(--font-size-lg); font-weight: 600; color: var(--primary);">${contactoData.info.phone}</a>
        </div>
        <div style="padding: var(--space-lg); background-color: var(--light); border-radius: var(--radius-lg);">
          <p style="font-size: var(--font-size-sm); color: var(--gray); margin-bottom: var(--space-sm);">Email</p>
          <a href="mailto:${contactoData.info.email}" style="font-size: var(--font-size-lg); font-weight: 600; color: var(--primary);">${contactoData.info.email}</a>
        </div>
        <div style="padding: var(--space-lg); background-color: var(--light); border-radius: var(--radius-lg);">
          <p style="font-size: var(--font-size-sm); color: var(--gray); margin-bottom: var(--space-sm);">Horario de atención</p>
          <p style="font-size: var(--font-size-base);">${contactoData.info.business_hours}</p>
        </div>
      </div>
    `;
    }
}
