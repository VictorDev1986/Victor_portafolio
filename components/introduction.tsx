import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

/**
 * Componente de introducción para la página principal del portafolio
 * Muestra información personal y una imagen profesional
 * @returns JSX del componente de introducción
 */
const Introduction = () => {
    return (
        <div className="z-20 mt-20 md:mt-0">
            <div className="z-20 grid items-center md:h-full mt-4 p-5 py-20 md:py-0 md:grid-cols-2 sm:px-20">
                {/* Contenedor de la imagen profesional - Ahora a la izquierda en desktop */}
                <div className="relative w-full h-auto overflow-visible order-1 md:order-1">
                    <Image
                        className="mb-6 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover mx-auto rounded-full border-4 border-gray-200 shadow-lg"
                        src="/fotoprofesional.png"
                        priority
                        width={500}
                        height={500}
                        alt="Foto profesional de Victor - Desarrollador de software"
                        sizes="(max-width: 768px) 280px, (min-width: 769px) 450px"
                        onError={(e) => console.log('Error cargando imagen:', e)}
                        onLoad={() => console.log('Imagen cargada correctamente')}
                    />
                </div>
                {/* Sección de texto con información personal - Ahora a la derecha en desktop */}
                <div className="flex flex-col justify-center max-w-full md:mx-20 order-2 md:order-2">
                    <h1 className="mb-8 text-3xl sm:text-4xl leading-tight text-center md:text-left md:text-5xl lg:text-6xl md:mb-8 font-extrabold">Hola! soy , <br />
                        {/* Animación de texto que muestra el rol profesional */}
                        <TypeAnimation
                            sequence={[
                                'Desarrollador de software',
                                1000,
                                'Desarrollador de software',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold bg-gradient-to-r from-green-500 via-green-400 to-blue-700 bg-clip-text text-transparent"
                        />
                    </h1>
                    {/* Descripción profesional */}
                    <p className="text-slate-300 mx-auto mt-0 text-lg sm:text-lg md:text-base lg:text-lg md:mx-0 md:mb-6 leading-relaxed font-medium">
                        Estudiante de Ingeniería de Sistemas (10º semestre) y desarrollador de software junior enfocado en el desarrollo web fullstack. Experiencia
                        en proyectos académicos y personales con tecnologías modernas como React, PHP, MySQL y TailwindCSS. Interesado en aportar valor
                        en equipos dinámicos aplicando buenas prácticas, metodologías ágiles y herramientas de cloud e inteligencia artificial.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;