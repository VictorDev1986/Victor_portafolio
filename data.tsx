import { Home, Terminal, Layers, Send, Github, Linkedin, X } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaLaravel, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMysql, SiLinux, SiTypescript } from "react-icons/si";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/victorsanchez1986/",
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
        title: "Inicio",
        icon: <Home size={30} strokeWidth={1.5} />,
        link: "/",
    },
    {
        id: 2,
        title: "Habilidades",
        icon: <Terminal size={30} strokeWidth={1.5} />,
        link: "/skills",
    },
    {
        id: 3,
        title: "Proyectos",
        icon: <Layers size={30} strokeWidth={1.5} />,
        link: "/portfolio",
    },
    {
        id: 4,
        title: "Contacto",
        icon: <Send size={30} strokeWidth={1.5} />,
        link: "/contact",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Extilo Express",
        image: "/Ecommerce.png",
        urlGithub: "https://estiloexpress.victorsanchezt.com/",
        urlDemo: "https://estiloexpress.victorsanchezt.com/",
        technologies: ["Wordpress", "php", "WooCommerce", "mysql"]
    },
    {
        id: 2,
        title: "Portafolio",
        image: "/portafolio.png",
        urlGithub: "https://github.com/VictorDev1986/victor-freelance.git/",
        urlDemo: "https://victorsanchezt.com//",
        technologies: ["TypeScript", "React", "TailwindCSS",]
    },
    {
        id: 3,
        title: "Cmtech",
        image: "/proyecto_cm.png",
        urlGithub: "https://cmtechcol.online/",
        urlDemo: "https://cmtechcol.online/",
        technologies: ["Wordpress", "php", "WooCommerce", "mysql"]
    },
    {
        id: 4,
        title: "Pet-vet",
        image: "/Landing.png",
        urlGithub: "https://github.com/VictorDev1986/pet-vet.git",
        urlDemo: "https://victordev1986.github.io/pet-vet/",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 5,
        title: "MovieFlix-Api",
        image: "/Clon_netflix.png",
        urlGithub: "https://github.com/VictorDev1986/MovieFlix.git",
        urlDemo: "https://moviefl.netlify.app/",
        technologies: ["TypeScript", "React", "TailwindCSS", "Axios"]
    },
    {
        id: 6,
        title: "Mi podcats",
        image: "/podcats.png",
        urlGithub: "https://github.com/VictorDev1986/Mi-Podcast.git",
        urlDemo: "https://mi-podcast.vercel.app/",
        technologies: ["JavaScript", "React", "TailwindCSS"]
    },
    {
        id: 7,
        title: "carosublimados",
        image: "/carosublimados.png",
        urlGithub: "https://carosublimados.shop/ ",
        urlDemo: "https://carosublimados.shop/ ",
        technologies: ["Wordpress", "php", "WooCommerce", "mysql"]
    }, 



];
export const technologiesByCategory = {
    frontend: [
        {
            id: 1,
            name: "React",
            icon: <FaReact size={40} color="#61DAFB" />
        },
        {
            id: 3,
            name: "JavaScript",
            icon: <FaJs size={40} color="#F7DF1E" />
        },
        {
            id: 4,
            name: "TypeScript",
            icon: <SiTypescript size={40} color="#3178C6" />
        },
        {
            id: 5,
            name: "HTML5",
            icon: <FaHtml5 size={40} color="#E34F26" />
        },
        {
            id: 6,
            name: "CSS3",
            icon: <FaCss3Alt size={40} color="#1572B6" />
        },
        {
            id: 7,
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={40} color="#38B2AC" />
        }
    ],
    backend: [
        {
            id: 8,
            name: "PHP",
            icon: <FaPhp size={40} color="#777BB3" />
        },
        {
            id: 9,
            name: "WordPress",
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
        },
        {
            id: 10,
            name: "Laravel",
            icon: <FaLaravel size={40} color="#FF2D20" />
        },
        {
            id: 11,
            name: "Node.js",
            icon: <SiNodedotjs size={40} color="#339933" />
        }
    ],
    databases: [
        {
            id: 13,
            name: "MySQL",
            icon: <SiMysql size={40} color="#4479A1" />
        },
        {
            id: 14,
            name: "MongoDB",
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        }
    ],
    cloudDevOps: [
        {
            id: 13,
            name: "Git",
            icon: <FaGitAlt size={40} color="#F05032" />
        },
        {
            id: 14,
            name: "GitHub",
            icon: <FaGithub size={40} color="#ffffff" />
        },
        {
            id: 16,
            name: "Linux",
            icon: <SiLinux size={40} color="#FCC624" />
        },
        {
            id: 17,
            name: "AWS",
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        }
    ]
};

export type TechnologyCategoryKey = keyof typeof technologiesByCategory;

export interface TechnologyCategoryConfig {
    key: TechnologyCategoryKey;
    label: string;
    token: string;
    filePath: string;
    accent: string;
}

export const technologyCategoryConfigs: TechnologyCategoryConfig[] = [
    {
        key: "frontend",
        label: "Frontend",
        token: "frontendStack",
        filePath: "stack/frontend.ts",
        accent: "from-emerald-400/40 via-teal-400/20 to-cyan-400/20",
    },
    {
        key: "backend",
        label: "Backend",
        token: "backendStack",
        filePath: "stack/backend.ts",
        accent: "from-cyan-400/30 via-blue-500/20 to-indigo-500/20",
    },
    {
        key: "databases",
        label: "Bases de Datos",
        token: "databaseStack",
        filePath: "stack/databases.ts",
        accent: "from-amber-400/30 via-orange-400/20 to-rose-500/20",
    },
    {
        key: "cloudDevOps",
        label: "Cloud y DevOps",
        token: "operationsStack",
        filePath: "stack/cloud-devops.ts",
        accent: "from-purple-400/30 via-violet-500/20 to-fuchsia-500/20",
    },
];


