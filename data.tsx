
import { BookText, CodeSquare, HomeIcon, UserRound, Github, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Linkedin, X } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaLaravel, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiNextdotjs, SiMysql, SiLinux } from "react-icons/si";
export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/-hugosanchez2022/",
    },
    {
        id: 3,
        logo: <X size={30} strokeWidth={1} />,
        src: "https://x.com/HugoDev86",
    },

    {
        id: 5,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/VictorDev1986",
    }

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Ingenieria de sistemas",
        subtitle: "Corporacion unificada nacional de educacion superior (CUN)",
        description: "Curso actualmente decimo semestre de ingenieria de sistemas.",
        date: "Ene 2025 ",
    },
    {
        id: 2,
        title: "Bootcamp Desarrollo full stack Nivel intermedio",
        subtitle: "Talento Tech",
        description: "Formación intensiva de 3 meses que combino teoría y práctica en el desarrollo web Full Stack, con un enfoque en metodologías ágiles y trabajo colaborativo, para construir aplicaciones web eficientes y escalables. .",
        date: "Nov 2024 ",
        certificateLink: "https://certificados.talentotech.co/?cert=2584682232&fingerprint=y#pdf"
    },

    {
        id: 3,
        title: "Agencia de diseño y desarrollo web",
        subtitle: "Freelancer",
        description: "Fundé una pequeña agencia freelance especializada en diseño y desarrollo de sitios web modernos para emprendedores, negocios locales y marcas personales. En este rol he trabajado directamente con clientes, liderando todas las etapas del proyecto: desde el diseño hasta la implementación final.",
        date: "feb 2024",
    },
    {
        id: 4,
        title: "Tecnologo en Desarrollo de",
        subtitle: "Centro Agroempresarial y turustico de los andes",
        description: "Programa tecnológico enfocado en el desarrollo de soluciones informáticas para apoyar procesos organizacionales. Adquirí habilidades para analizar, diseñar, desarrollar e implementar sistemas de información aplicando buenas prácticas de programación y metodologías ágiles.",
        date: "Dic 2022",
        certificateLink: "https://heyzine.com/flip-book/33a9332d95.html"

    },
    {
        id: 5,
        title: "Desarrollador Web - Aprendiz SENA",
        subtitle: "Centro Agroempresarial y turustico de los andes",
        description: "Desarrollé una plataforma eCommerce para la venta de productos digitales, como sitios web, implementando gestión de productos, carrito de compras y pagos seguros, usando metodologías ágiles para garantizar una solución eficiente y escalable..",
        date: "Nov 2022",
    },
    {
        id: 6,
        title: "Auxiliar de Soporte Técnico de Software",
        subtitle: "World office Colombia/Asesor de soporte tecnico de  software",
        description: "Realicé mis prácticas productivas brindando soporte técnico a usuarios del software empresarial contable, resolviendo incidencias y apoyando al equipo de soporte en tareas operativas.",
        date: "Marz 2022",
    },
]


export const dataPortfolio = [
    {
        id: 1,
        title: "Extilo Express",
        image: "/proyecto1.png",
        urlGithub: "https://estiloexpress.victorsanchez.click/",
        urlDemo: "https://estiloexpress.victorsanchez.click/",
        technologies: ["Wordpress", "WooCommerce"]
    },
    {
        id: 2,
        title: "Agencia",
        image: "/agencia.png",
        urlGithub: "https://victorsanchez.click/",
        urlDemo: "https://victorsanchez.click/",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 3,
        title: "DevTre",
        image: "/proyectoDesarrollo.png",
        urlGithub: "#!",
        urlDemo: "#!",
        technologies: ["Next.js", "TailwindCSS", "MongoDB", "Node.js", "Express", "React"]
    },
    {
        id: 4,
        title: "Ecommerce",
        image: "/proyectoDesarrollo.png",
        urlGithub: "#!",
        urlDemo: "#!",
        technologies: ["React", "Node.js", "Express"]
    },
    {
        id: 5,
        title: "Plataforma Digital",
        image: "/proyectoDesarrollo.png",
        urlGithub: "#!",
        urlDemo: "#!",
        technologies: ["React", "Node.js", "Express"]
    },
    {
        id: 6,
        title: "Sistema de Gestión",
        image: "/proyectoDesarrollo.png",
        urlGithub: "#!",
        urlDemo: "#!",
        technologies: ["React", "Node.js", "Express"]
    }
   
];
export const technologies = [
    {
        id: 1,
        name: "HTML",
        icon: <FaHtml5 size={35} color="#E34F26" />
    },
    {
        id: 2,
        name: "CSS",
        icon: <FaCss3Alt size={35} color="#1572B6" />
    },
    {
        id: 3,
        name: "Tailwind",
        icon: <SiTailwindcss size={35} color="#38B2AC" />
    },
    {
        id: 4,
        name: "JavaScript",
        icon: <FaJs size={35} color="#F7DF1E" />
    },
        {
        id: 5,
        name: "React",
        icon: <FaReact size={35} color="#61DAFB" />
    },
    {
        id: 6,
        name: "PHP",
        icon: <FaPhp size={35} color="#777BB3" />
    },
    {
        id: 7,
        name: "Laravel",
        icon: <FaLaravel size={35} color="#FF2D20" />
    },

    {
        id: 8,
        name: "NodeJs",
        icon: <SiNodedotjs size={35} color="#339933" />
    },
    {
        id: 9,
        name: "NextJs",
        icon: <SiNextdotjs size={35} color="#fffff" />
    },
    {
        id: 10,
        name: "MySQL",
        icon: <SiMysql size={38} color="#4479A1" />
    },
    {
        id: 11,
        name: "Git",
        icon: <FaGitAlt size={35} color="#F05032" />
    },
    {
        id: 12,
        name: "GitHub",
        icon: <FaGithub size={35} color="#ffffff" />
    },
    {
        id: 13,
        name: "Docker",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
        id: 14,
        name: "Linux",
        icon: <SiLinux size={35} color="#ffffff" />
    }
];

