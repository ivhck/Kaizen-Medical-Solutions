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
│   └── interactions.js          # Menú móvil, scroll reveal y utilidades visuales
├── assets/
│   ├── images/                  # Imágenes (hero, logo, blog, casos)
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

## ⚙️ Funcionalidades Implementadas

✅ Navegación responsiva con menú móvil
✅ Paleta de colores corporativa
✅ Página de inicio con múltiples secciones
✅ Página de servicios detallada
✅ Página sobre nosotros con misión/visión
✅ Centro de recursos con blog, descargas, casos
✅ Página de contacto con formulario de correo y datos de agendamiento
✅ Footer con enlaces y redes sociales
✅ Diseño completamente responsivo
✅ Sitio completamente estático en HTML

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
Edita directamente los archivos HTML dentro de `/` y `/pages/`

### Agregar Calendly
Edita el bloque de contacto en `pages/contacto.html` y reemplaza el texto o enlace por tu URL real de Calendly.

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

- **Formulario**: Envío por correo mediante `mailto:`
- **Calendly**: Enlace opcional para agendamiento
- **Redes Sociales**: Enlaces en footer

## 📊 Siguientes Pasos

1. **Agregar imágenes reales** en `/assets/images/`
2. **Configurar Calendly** con URL real
3. **Configurar destino de formulario** si prefieres backend en lugar de `mailto:`
4. **Crear páginas adicionales** para servicios o artículos nuevos
5. **Agregar Google Analytics** si lo necesitas
6. **Deploy** a hosting

## 🛠 Tecnologías

- HTML5 semántico
- CSS3 (variables, flexbox, grid)
- JavaScript vanilla (sin frameworks)
- HTML estático sin CMS
- Responsive design mobile-first

## 📜 Licencia

Kaizen Medical Solutions © 2024

---

¿Preguntas? Contacta con el equipo de desarrollo.
