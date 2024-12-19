import ContainerPage from "@/components/container";
import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

const PageAboutMe = () => {
   
    return (
        <>
            <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="relative p-2">
                     <Image className="rounded-full border-double border-4 border-green-500 opacity-40" src="/foto perfil.jpg" priority width="350" height="350" alt="Avatar" />
                        
                    </div>

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg p-4">
                        <h2 className="my-3 text-4xl font-bold text-center md:text-left bg-gradient-to-r from-green-500 via
                         to-blue-700 bg-clip-text text-transparent">
                        = Quien soy </h2>
                        <p className=" mt-4 text-white">Soy Tecnólogo en Análisis y Desarrollo de Software, graduado del SENA en Colombia, y actualmente estudiante de Ingeniería de Sistemas. Cuento con una sólida experiencia en diseño y desarrollo de aplicaciones web y software a la medida. Me destaco en la creación de interfaces de usuario intuitivas y atractivas, enfocadas en brindar experiencias excepcionales. Además, tengo habilidades destacadas para trabajar en entornos colaborativos,
                             fomentando el trabajo en equipo y contribuyendo a la consecución de metas compartidas. 
                        </p>

                    </div>

                   
                </div>

            </ContainerPage>

        </>
    );
};

export default PageAboutMe;