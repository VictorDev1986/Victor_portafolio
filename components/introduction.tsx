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
                        className="mb-6 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover mx-auto rounded-full border-[3px] border-emerald-500/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                        src="/foto_perfil.jpg"
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

                    {/* Animación de texto que muestra el rol profesional */}
                    <div className="h-24 md:h-32 flex items-center mb-6 md:mb-8">
                        <TypeAnimation
                            sequence={[
                                'Desarrollador de Software',
                                1000,
                                'Soporte TI',
                                1000,
                                'Ingeniero de Sistemas',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold bg-gradient-to-r from-green-500 via-green-400 to-blue-700 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full block"
                        />
                    </div>
                    {/* Descripción profesional */}
                    <p className="text-slate-300 mx-auto mt-0 text-lg sm:text-lg md:text-base lg:text-lg md:mx-0 md:mb-6 leading-relaxed font-medium">
                        Tecnólogo en Análisis y Desarrollo de Sistemas de Información y estudiante de décimo semestre de Ingeniería de Sistemas, con
                        experiencia en soporte TI y desarrollo de software, destacándome por mi rápida capacidad de aprendizaje, adaptación a nuevos
                        entornos tecnológicos y enfoque en aportar soluciones que mejoren la eficiencia operativa mediante programación, automatización
                        y soporte técnico de calidad.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;