// config.js - Carga la configuración global y datos

let config = {};
let homeData = {};
let serviciosData = {};
let aboutData = {};
let recursosData = {};
let contactoData = {};

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
    config = await loadJSON('/data/config.json');
    homeData = await loadJSON('/data/home.json');
    serviciosData = await loadJSON('/data/servicios.json');
    aboutData = await loadJSON('/data/about.json');
    recursosData = await loadJSON('/data/recursos.json');
    contactoData = await loadJSON('/data/contacto.json');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initConfig);
