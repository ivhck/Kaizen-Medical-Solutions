// config.js - Carga la configuración global y datos

let config = {};
let homeData = {};
let serviciosData = {};
let aboutData = {};
let recursosData = {};
let contactoData = {};

function getSitePrefix() {
    if (window.location.pathname.includes('/pages/recursos/')) {
        return '../../';
    }

    if (window.location.pathname.includes('/pages/')) {
        return '../';
    }

    return './';
}

function resolveSitePath(path) {
    if (!path) {
        return path;
    }

    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#') || path.startsWith('./') || path.startsWith('../')) {
        return path;
    }

    return `${getSitePrefix()}${path.replace(/^\/+/, '')}`;
}

// Función para cargar JSON
async function loadJSON(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (error) {
        console.error(`Error cargando ${path}:`, error);
        return null;
    }
}

// Cargar todas las configuraciones
async function initConfig() {
    config = await loadJSON(resolveSitePath('data/config.json'));
    homeData = await loadJSON(resolveSitePath('data/home.json'));
    serviciosData = await loadJSON(resolveSitePath('data/servicios.json'));
    aboutData = await loadJSON(resolveSitePath('data/about.json'));
    recursosData = await loadJSON(resolveSitePath('data/recursos.json'));
    contactoData = await loadJSON(resolveSitePath('data/contacto.json'));
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initConfig);
