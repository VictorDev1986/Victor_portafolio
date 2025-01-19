import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image className="mb-12" src="/Victor.png" priority width="600" height="600" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-lg">
                    
                    <h1 className="mb-12 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-6">Hola! soy , <br />
                        <TypeAnimation
                            sequence={[
                                'Desarrollador de software',
                                1000,
                                'Desarrollador Full Stack',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold bg-gradient-to-r from-green-500 via to-blue-700 bg-clip-text text-transparent"
                        />
                    </h1>
                    <p className="text-slate-400 mx-auto mb-5  md:text-xl md:mx-0 md:mb-6">
                        Soy tecnólogo en desarrollo de software y estudiante de Ingeniería de Sistemas, con experiencia en desarrollo Full Stack. Tengo la capacidad de construir aplicaciones
                        web completas, desde el diseño del front-end hasta el desarrollo del back-end, la configuración de bases de datos y su despliegue en producción.
                        me apasiona crear soluciones funcionales, escalables y de alto impacto. Siempre enfocado en el aprendizaje continuo,
                        el trabajo colaborativo y la entrega de resultados de calidad.
                    </p>
                    
                </div>
                
            </div>
         
          
        </div>
    );
}

export default Introduction;