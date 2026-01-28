import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 mt-20 md:mt-0 relative">
            <div className="z-20 grid items-center md:h-full mt-4 p-5 py-20 md:py-0 md:grid-cols-2 sm:px-20">
                <div className="relative w-full h-auto overflow-visible order-1 md:order-1">
                    <Image
                        className="mb-6 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover mx-auto rounded-full border-[3px] border-emerald-500/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                        src="/foto_perfil.jpg"
                        priority
                        width={500}
                        height={500}
                        alt="Professional photo of Victor - Software Developer"
                        sizes="(max-width: 768px) 280px, (min-width: 769px) 450px"
                        onError={(e) => console.log('Error cargando imagen:', e)}
                        onLoad={() => console.log('Imagen cargada correctamente')}
                    />
                </div>
                <div className="flex flex-col justify-center max-w-full md:mx-20 order-2 md:order-2">
                    <div className="h-24 md:h-32 flex items-center mb-6 md:mb-8">
                        <TypeAnimation
                            sequence={[
                                'Software Developer',
                                1000,
                                'Fullstack Developer',  
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full block"
                        />
                    </div>
                    <p className="text-slate-700 mx-auto mt-0 text-lg sm:text-lg md:text-base lg:text-lg md:mx-0 md:mb-6 leading-relaxed font-medium">
                       I am a Software Analysis and Development Technologist and Systems Engineer with over 3 years of experience developing web solutions focused on performance, scalability, and user experience. My main strength lies in the frontend, where I work with React and TypeScript to build modern, maintainable interfaces following best practices.

On the backend, I have developed applications and APIs using PHP and Laravel, integrating business logic, databases, and services that support full-stack applications. I am based in Colombia and stand out for my commitment, adaptability, and focus on continuous improvement, delivering efficient and high-quality solutions in every project.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;