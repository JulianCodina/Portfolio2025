# Portafolio Web - Julián Codina

Portafolio personal desarrollado con **React 19**, **TypeScript** y **Vite**, enfocado en alto rendimiento, accesibilidad (WCAG AA) y una experiencia visual moderna con soporte dinámico para tema claro y oscuro.

---

## 🚀 Características

- **Diseño Moderno y Responsivo:** Adaptado fluidamente para móviles, tablets y monitores de escritorio.
- **Internacionalización (i18n):** Soporte en tiempo real para 3 idiomas: **Español (ES)**, **Inglés (EN)** y **Portugués (PT)** gestionado mediante Context API.
- **Tema Claro / Oscuro Dinámico:** Detección y persistencia de preferencias de usuario (`data-theme`) en `localStorage`.
- **Mapa Interactivo Adaptativo:** Integración con Leaflet y mosaicos vectoriales dual-layer de **CARTO** (Dark Matter y Positron) que se adaptan automáticamente al tema activo, con controles flotantes de zoom y recentrado.
- **Accesibilidad Web (A11y):** Ratios de contraste superiores a 4.5:1 en ambos temas y áreas táctiles mínimas de 44px en dispositivos móviles.
- **Formulario de Contacto Funcional:** Envío de correos electrónicos integrado con **EmailJS** y notificaciones flotantes con snackbar.
- **Iconografía Vectorial:** Implementación completa con la librería `react-icons` para máxima nitidez y rendimiento sin depender de imágenes estáticas.

---

## 🛠️ Tecnologías Utilizadas

- **Core:** [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite 7](https://vite.dev/), `@vitejs/plugin-react-swc`
- **Estilos:** Vanilla CSS con CSS Modules, variables de diseño (tokens) y diseño sin frameworks pesados
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fi`, `react-icons/fa6`, `react-icons/hi`)
- **Mapas:** [React Leaflet 5](https://react-leaflet.js.org/) & [Leaflet 1.9](https://leafletjs.com/) con tiles de CARTO Basemaps
- **Servicios:** [EmailJS](https://www.emailjs.com/) para gestión de correos desde el frontend
- **Linter & Calidad de Código:** [ESLint 9](https://eslint.org/) con plugins para React Hooks y TypeScript

---

## ⚙️ Variables de Entorno

El proyecto utiliza una clave de API pública de CARTO para cargar los mosaicos del mapa sin marcas de agua.

1. Duplica el archivo de ejemplo:

   ```bash
   cp .env.example .env
   ```

2. Configura tu API Key en `.env`:

   ```env
   NEXT_PUBLIC_CARTO_API_KEY=tu_api_key_de_carto
   ```

> [!NOTE]
> Puedes obtener una API Key gratuita para uso no comercial en [carto.com/basemaps/apikey](https://carto.com/basemaps/apikey/).

---

## 💻 Instalación y Ejecución Local

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/JulianCodina/Portfolio2025.git
   cd Portfolio2025
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**

   Accede a [http://localhost:5173](http://localhost:5173)

---

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo local con Hot Module Replacement (HMR).
- `npm run build`: Compila el código TypeScript (`tsc -b`) y genera el bundle de producción con Vite.
- `npm run lint`: Ejecuta el análisis estático de código con ESLint.
- `npm run preview`: Previsualiza localmente el bundle generado en la carpeta `dist/`.

---

## 📁 Estructura del Proyecto

```text
Portfolio2025/
├── public/                 # Assets estáticos (logos de empresas, previsualizaciones, certificados)
├── src/
│   ├── components/         # Componentes reutilizables (Header, Cards, Inputs, Map, Snackbar)
│   ├── contexts/           # Proveedores de estado global (LanguageContext, TabContext)
│   ├── pages/              # Secciones principales (About, Portfolio, Contact)
│   ├── index.css           # Sistema de diseño global, tokens de color y tipografía
│   ├── main.tsx            # Punto de entrada de la aplicación
│   └── vite-env.d.ts       # Tipado de variables de entorno de Vite
├── .env.example            # Plantilla de variables de entorno
├── package.json            # Dependencias y scripts del proyecto
├── tsconfig.json           # Configuración del compilador TypeScript
└── vite.config.ts          # Configuración del empaquetador Vite
```

---

## 📫 Contacto

- **LinkedIn:** [Julián Codina](https://www.linkedin.com/in/julian-codina/)
- **GitHub:** [@JulianCodina](https://github.com/JulianCodina)
- **Email:** [depedrojulianismael@gmail.com](mailto:depedrojulianismael@gmail.com)
- **Teléfono:** +54 3624 249451
- **Ubicación:** Resistencia, Chaco, Argentina

---

Hecho con ❤️ por **Julián Codina**. ¡Gracias por tu visita!
