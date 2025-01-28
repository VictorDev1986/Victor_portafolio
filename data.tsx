
import { BookText, CodeSquare, HomeIcon, UserRound, Github, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Linkedin, X } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiNodedotjs, SiTypescript, SiExpress, SiNextdotjs, SiMysql, SiMongodb, SiLinux } from "react-icons/si";
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
        description: "Curso actualmente octavo semestre de ingenieria de sistemas.",
        date: "Ene 2025 ",
    },
    {
        id: 2,
        title: "Bootcamp Desarrollo full stack Nivel intermedio",
        subtitle: "Talento Tech",
        description: "Formación intensiva que combina teoría y práctica en el desarrollo web Full Stack, con un enfoque en metodologías ágiles y trabajo en equipo, para construir aplicaciones web eficientes y escalables. .",
        date: "Nov 2024 ",
        certificateLink: "https://certificados.talentotech.co/?cert=2584682232&fingerprint=y#pdf"
    },

    {
        id: 3,
        title: "Agencia de diseño web y marketing digital",
        subtitle: "Freelancer",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "feb 2024",
    },
    {
        id: 4,
        title: "Tecnologo en Desarrollo de Software",
        subtitle: "Centro Agroempresarial y turustico de los andes",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "Dic 2022",
        certificateLink: "https://heyzine.com/flip-book/33a9332d95.html"

    },
    {
        id: 5,
        title: "Sitio web hsweb servicios ",
        subtitle: "Centro Agroempresarial y turustico de los andes",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "Nov 2022",
    },
    {
        id: 6,
        title: "Aprendiz Sena",
        subtitle: "World office Colombia/Asesor de soporte tecnico de  software",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
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
        technologies: ["Wordpress  ", "woocommerce"]
    },
    {
        id: 2,
        title: "Agencia",
        image: "/agencia.png",
        urlGithub: "https://victorsanchez.click/",
        urlDemo: "https://victorsanchez.click/",
        technologies: ["HTML ", "CSS ", "JavaScript"]
    },
    {
        id: 3,
        title: "DevTre",
        image: "/proyectoDesarrollo.png",
        urlGithub: "#!",
        urlDemo: "#!",
        technologies: ["NextJs ", "TailwindCSS ", "MongoDB ", "NodeJs ", "Express", "React"]
    },
    {
        id: 4,
        title: "Ecommerce",
        image: "/proyectoDesarrollo.png",
        urlGithub: "#!",
        urlDemo: "#!",
        technologies: ["React, ", "NodeJs. ", "Express"]
    }
];
export const technologies = [
    {
        id: 1,
        name: "HTML",
        level: "Intermedio",
        icon: <FaHtml5 size={35} color="#E34F26" />
    },
    {
        id: 2,
        name: "CSS",
        level: "Intermedio",
        icon: <FaCss3Alt size={35} color="#1572B6" />
    },
    {
        id: 3,
        name: "Tailwind",
        level: "Intermedio",
        icon: <SiTailwindcss size={35} color="#38B2AC" />
    },
    {
        id: 4,
        name: "JavaScript",
        level: "Intermedio",
        icon: <FaJs size={35} color="#F7DF1E" />
    },
    {
        id: 5,
        name: "Typescript",
        level: "Básico",
        icon: <SiTypescript size={35} color="#007ACC" />
    },
    {
        id: 6,
        name: "React",
        level: "Intermedio",
        icon: <FaReact size={35} color="#61DAFB" />
    },
    {
        id: 7,
        name: "NodeJs",
        level: "Básico",
        icon: <SiNodedotjs size={35} color="#339933" />
    },
    {
        id: 8,
        name: "Express",
        level: "Básico",
        icon: <SiExpress size={35} color="#fffff" />
    },
    {
        id: 9,
        name: "NextJs",
        level: "Básico",
        icon: <SiNextdotjs size={35} color="#fffff" />
    },
    {
        id: 10,
        name: "MongoDB",
        level: "Básico",
        icon: <SiMongodb size={35} color="#47A248" />
    },
    {
        id: 11,
        name: "Mysql",
        level: "Básico",
        icon: <SiMysql size={38} color="#4479A1" />
    },
    {
        id: 12,
        name: "Git",
        level: "Básico",
        icon: <FaGitAlt size={35} color="#F05032" />
    },
    {
        id: 13,
        name: "GitHub",
        level: "Básico",
        icon: <FaGithub size={35} color="#ffffff" />
    },
 
    {
        id: 14,
        name: "Linux",
        level: "Intermedio",
        icon: <SiLinux size={35} color="#ffffff" />
    }
];

