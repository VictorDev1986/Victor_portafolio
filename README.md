# Victor Sanchez — Portafolio Profesional


[Sitio en línea](https://victorsanchez.vercel.app/)

## Descripción

Portafolio moderno desarrollado con Next.js para presentar proyectos, habilidades y datos de contacto. Incluye página principal, sección de habilidades, portafolio en grid y página de contacto con enlaces sociales.

## Características

- Arquitectura App Router
- Interfaz responsive con Tailwind CSS
- Transiciones animadas y fondo de partículas
- Componentes modulares y datos centralizados

## Tecnologías

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- TS Particles

## Estructura del proyecto

```
├── app/
│   ├── favicon.png
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── (routes)/
│       ├── contact/
│       │   └── page.tsx
│       ├── portfolio/
│       │   └── page.tsx
│       └── skills/
│           └── page.tsx
├── components/
│   ├── botones.tsx
│   ├── ContactCard.tsx
│   ├── container.tsx
│   ├── cover-particles.tsx
│   ├── header.tsx
│   ├── introduction.tsx
│   ├── navbar.tsx
│   ├── portfolio-box.tsx
│   ├── TechnologiesSection.tsx
│   ├── transition-component.tsx
│   └── transition-page.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── Api.png
│   ├── Clon_netflix.png
│   ├── Ecommerce.png
│   ├── Landing.png
│   ├── foto_perfil.jpg
│   ├── podcats.png
│   ├── portafolio.png
│   ├── proyecto_cm.png
│   ├── proyectoDesarrollo.png
│   └── Victor Sanchez.pdf
├── utils/
│   └── motion-transitions.tsx
├── data.tsx
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Inicio rápido

```bash
git clone https://github.com/<tu-usuario>/<tu-repo>.git
cd <tu-repo>
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización

- Actualiza el texto y rol en `components/introduction.tsx`.
- Edita proyectos del portafolio en `data.tsx` (`dataPortfolio`).
- Ajusta el stack tecnológico en `data.tsx` (`technologiesByCategory`).
- Cambia estilos globales en `app/globals.css` o en Tailwind.

## Despliegue

Compila y despliega con Vercel o cualquier proveedor compatible con Node.js.

```bash
npm run build
npm run start
```
