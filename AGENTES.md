# 🤖 Agentes IA para Proyecto Victor_portafolio

## 📋 Descripción del Proyecto

**Victor_portafolio** es un portafolio profesional desarrollado con **Next.js 15** y **TypeScript** que muestra las habilidades, proyectos y experiencia de Victor como desarrollador de software. El proyecto incluye animaciones modernas, efectos de partículas y un diseño responsive con **Tailwind CSS**.

### 🌐 Enlaces del Proyecto
- **Repositorio**: [GitHub - VictorDev1986/Victor_portafolio](https://github.com/VictorDev1986/Victor_portafolio)
- **Demo en vivo**: [victorsanchez.vercel.app](https://victorsanchez.vercel.app/)

---

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones fluidas

### Librerías Especializadas
- **@tsparticles/react** - Efectos de partículas interactivas
- **react-type-animation** - Animaciones de texto
- **react-icon-cloud** - Nube de iconos 3D
- **react-icons** - Iconografía moderna
- **lucide-react** - Iconos SVG optimizados
- **next-themes** - Modo oscuro/claro

### Herramientas de Desarrollo
- **ESLint** - Linter para código limpio
- **PostCSS** - Procesamiento de CSS
- **Turbopack** - Bundler de desarrollo rápido

---

## 🤖 Agentes IA Especializados

### 1. **Agente de Desarrollo Frontend**
```yaml
Especialidad: Desarrollo React/Next.js
Responsabilidades:
  - Desarrollo de componentes React funcionales
  - Implementación de rutas con App Router
  - Optimización de performance y SEO
  - Integración de animaciones con Framer Motion
  - Documentación y comentarios del código en ESPAÑOL
Conocimientos clave:
  - Next.js 15 con App Router
  - TypeScript para tipado fuerte
  - Hooks de React (useState, useEffect, useCallback)
  - Optimización de imágenes con next/image
  - Buenas prácticas de comentarios en español
```

### 2. **Agente de Diseño UI/UX**
```yaml
Especialidad: Interfaces modernas y responsive
Responsabilidades:
  - Desarrollo con Tailwind CSS
  - Diseño responsive para móvil y desktop
  - Implementación de temas oscuro/claro
  - Efectos visuales y micro-interacciones
Conocimientos clave:
  - Tailwind CSS y utilidades personalizadas
  - Gradientes y efectos visuales
  - Responsive design patterns
  - Accesibilidad web (a11y)
```

### 3. **Agente de Animaciones**
```yaml
Especialidad: Efectos visuales y transiciones
Responsabilidades:
  - Implementar animaciones con Framer Motion
  - Configurar efectos de partículas con tsparticles
  - Crear transiciones entre páginas
  - Optimizar animaciones para performance
Conocimientos clave:
  - Framer Motion API
  - Configuración de tsparticles
  - CSS transforms y keyframes
  - Intersection Observer API
```

### 4. **Agente de Contenido y Datos**
```yaml
Especialidad: Gestión de datos y contenido
Responsabilidades:
  - Estructurar datos del portafolio (data.tsx)
  - Gestionar información de proyectos y skills
  - Configurar metadatos y SEO
  - Optimizar contenido para rendimiento
Conocimientos clave:
  - Estructuras de datos en TypeScript
  - SEO y metadatos de Next.js
  - Gestión de assets estáticos
  - Organización de contenido dinámico
```

### 5. **Agente de DevOps y Deployment**
```yaml
Especialidad: Despliegue y optimización
Responsabilidades:
  - Configuración de build para producción
  - Optimización de bundle size
  - Despliegue en Vercel
  - Configuración de CI/CD
Conocimientos clave:
  - Next.js build optimization
  - Vercel deployment
  - Environment variables
  - Performance monitoring
```

---

## 📁 Estructura de Archivos Clave

```
Victor_portafolio/
├── app/                    # App Router de Next.js 15
│   ├── layout.tsx         # Layout principal con metadata
│   ├── page.tsx           # Página de inicio
│   └── (routes)/          # Rutas agrupadas
│       ├── about-me/      # Página sobre mí
│       ├── contact/       # Página de contacto
│       ├── portfolio/     # Portafolio de proyectos
│       └── skills/        # Habilidades técnicas
├── components/            # Componentes reutilizables
│   ├── introduction.tsx   # Componente de introducción
│   ├── navbar.tsx        # Barra de navegación
│   ├── cover-particles.tsx # Efectos de partículas
│   └── transition-*.tsx   # Componentes de transición
├── data.tsx              # Datos del portafolio
├── utils/                # Utilidades y helpers
└── public/               # Assets estáticos
```

---

## 📝 Estándares de Documentación

### Comentarios en Código
**OBLIGATORIO: Todos los comentarios deben estar en ESPAÑOL**

```typescript
// ✅ CORRECTO - Comentarios en español
/**
 * Componente para mostrar la introducción del portafolio
 * @param className - Clases CSS adicionales (opcional)
 * @returns JSX del componente de introducción
 */
const Introduction = ({ className }: { className?: string }) => {
  // Estado para controlar la animación del texto
  const [isVisible, setIsVisible] = useState(false);
  
  // Efecto para iniciar la animación al cargar el componente
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className={`introduction-container ${className}`}>
      {/* Contenedor principal de la introducción */}
    </div>
  );
};

// ❌ INCORRECTO - Comentarios en inglés
// Component for portfolio introduction
// State to control text animation
```

### Tipos de Comentarios Requeridos
- **JSDoc**: Para funciones y componentes principales
- **Comentarios de línea**: Para lógica compleja o no obvia
- **Comentarios de bloque**: Para secciones importantes del código
- **TODOs**: Siempre en español (// TODO: Agregar validación de formulario)

---

## 🎯 Prompt Templates para Agentes

### Para Desarrollo de Componentes
```
Actúa como un experto desarrollador de React/Next.js 15. 
Crea/modifica componentes siguiendo estas pautas:
- Usa TypeScript con tipado estricto
- Implementa componentes funcionales con hooks
- Aplica Tailwind CSS para estilos
- Considera responsive design (móvil primero)
- Incluye animaciones con Framer Motion cuando sea apropiado
- Sigue las convenciones del proyecto existente
- IMPORTANTE: Todos los comentarios en el código deben estar en ESPAÑOL
- Documenta funciones, componentes y lógica compleja en español
```

### Para Optimización de Performance
```
Actúa como un experto en optimización web. Analiza y mejora:
- Bundle size y tree shaking
- Lazy loading de componentes
- Optimización de imágenes
- Core Web Vitals (LCP, FID, CLS)
- SEO y metadatos
- Accesibilidad web
```

### Para Diseño y Styling
```
Actúa como un diseñador UI/UX especializado en desarrollo web.
- Usa Tailwind CSS siguiendo principios de design system
- Implementa modo oscuro con next-themes
- Crea interfaces modernas y minimalistas
- Asegura consistencia visual en todo el proyecto
- Considera UX patterns para portafolios profesionales
```

---

## 📊 Métricas y KPIs del Proyecto

- **Performance Score**: Objetivo >90 en Lighthouse
- **Bundle Size**: <500KB inicial
- **Time to Interactive**: <3 segundos
- **Mobile Responsive**: 100% compatible
- **SEO Score**: >95 en herramientas de SEO

---

## 🔄 Workflow de Desarrollo

1. **Análisis**: Entender el requerimiento específico
2. **Planificación**: Definir componentes y estructura
3. **Desarrollo**: Implementar con TypeScript + Tailwind
4. **Documentación**: Agregar comentarios explicativos en ESPAÑOL
5. **Testing**: Verificar responsive y performance
6. **Optimización**: Ajustar animaciones y carga
7. **Deployment**: Build y deploy en Vercel

---

*Este documento está diseñado para guiar a agentes IA en el desarrollo y mantenimiento del portafolio profesional de Victor.*