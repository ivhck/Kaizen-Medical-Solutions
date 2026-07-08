# Kaizen Medical Solutions - Sitio Web

Soluciones de Salud Ocupacional para una Industria más Productiva y Rentable.

## 📋 Estructura del Proyecto

```
/
├── index.html                    # Página de inicio
├── pages/
│   ├── servicios.html           # Página de servicios
│   ├── nosotros.html            # Página sobre nosotros
│   ├── recursos.html            # Centro de recursos
│   └── contacto.html            # Formulario y agendamiento
├── css/
│   └── styles.css               # Estilos principales (paleta de colores, componentes)
├── js/
│   ├── config.js                # Configuración global
│   ├── components.js            # Componentes reutilizables (navbar, footer)
│   ├── home.js                  # Lógica página inicio
│   ├── servicios.js             # Lógica página servicios
│   ├── about.js                 # Lógica página nosotros
│   ├── recursos.js              # Lógica página recursos
│   └── contacto.js              # Lógica página contacto
├── data/
│   ├── config.json              # Configuración del sitio
│   ├── home.json                # Contenido página inicio
│   ├── servicios.json           # Catálogo de servicios
│   ├── about.json               # Información empresa
│   ├── recursos.json            # Artículos, casos, descargas
│   └── contacto.json            # Información contacto
├── assets/
│   ├── images/                  # Imágenes (hero, servicios, etc)
│   ├── icons/                   # Iconografía
│   └── downloads/               # PDFs y descargas
└── README.md                    # Este archivo
```

## 🎨 Paleta de Colores

- **Azul Marino (Primary)**: `#162845` - Confianza y profesionalismo
- **Azul Acero (Secondary)**: `#243263` - Tecnología y precisión
- **Verde Acento**: `#87BF5D` - Salud y prevención
- **Oscuro**: `#000000` - Texto principal
- **Gris**: `#59677A` - Texto secundario
- **Claro**: `#F4F7FB` - Fondos alternativos
- **Blanco**: `#FFFFFF` - Fondo principal

## 📄 Archivos JSON

### config.json
Configuración global del sitio (nombre, colores, navegación, etc)

### home.json
Contenido de la página de inicio (hero, problemas, servicios, CTA)

### servicios.json
Catálogo de 5 servicios con descripción, problemas, alcance, entregables y beneficios

### about.json
Información sobre la empresa (misión, visión, valores, diferencial)

### recursos.json
Centro de recursos (artículos, descargas, casos de éxito)

### contacto.json
Información de contacto y configuración de formulario

## ⚙️ Funcionalidades Implementadas

✅ Navegación responsiva con menú móvil
✅ Paleta de colores corporativa
✅ Página de inicio con múltiples secciones
✅ Página de servicios detallada
✅ Página sobre nosotros con misión/visión
✅ Centro de recursos con blog, descargas, casos
✅ Página de contacto con formulario + Calendly
✅ Footer con enlaces y redes sociales
✅ Diseño completamente responsivo
✅ Carga dinámica de contenido desde JSON

## 🚀 Cómo Usar

### Opción 1: Servidor Local Simple (Python)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego visita: `http://localhost:8000`

### Opción 2: Node.js
```bash
npx http-server .
```

### Opción 3: VSCode Live Server
Instala la extensión "Live Server" y usa "Go Live"

## 📝 Personalización

### Cambiar Colores
Edita `/css/styles.css` - Variables CSS en `:root`

### Cambiar Contenido
Edita los archivos JSON en `/data/` sin necesidad de modificar HTML/JS

### Agregar Calendly
En `/data/contacto.json`, actualiza la URL de Calendly:
```json
"calendly": {
  "username": "tu-username",
  "embed_url": "https://calendly.com/tu-username/15min"
}
```

### Agregar Imágenes
Coloca imágenes en `/assets/images/` y referéncialas en los JSON

## 📱 Breakpoints Responsivos

- **Desktop**: > 768px
- **Tablet**: 480px - 768px  
- **Mobile**: < 480px

## 🔐 SEO

- Meta tags en cada página
- Semántica HTML correcta
- Estructura de encabezados clara
- URLs limpias
- Links internos optimizados

## 📞 Integraciones

- **Formulario**: Captura de datos en tiempo real
- **Calendly**: Agendamiento automático integrado
- **Redes Sociales**: Enlaces en footer

## 📊 Siguientes Pasos

1. **Agregar imágenes reales** en `/assets/images/`
2. **Configurar Calendly** con URL real
3. **Configurar destino de formulario** (emailjs, backend, etc)
4. **Crear página de cada servicio** individual (opcional)
5. **Agregar artículos del blog** en recursos
6. **Implementar Google Analytics**
7. **Obtener certificado SSL**
8. **Deploy** a hosting

## 🛠 Tecnologías

- HTML5 semántico
- CSS3 (variables, flexbox, grid)
- JavaScript vanilla (sin frameworks)
- JSON para contenido dinámico
- Responsive design mobile-first

## 📜 Licencia

Kaizen Medical Solutions © 2024

---

¿Preguntas? Contacta con el equipo de desarrollo.
