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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 mt-0 pb-8">
                    <div className="relative p-2 hidden md:block">
                        <Image className="hidden md:block rounded-full border-spacing-80 border-4 border-green-500 opacity-40" src="/foto perfil.jpg" priority width="350" height="350" alt="Avatar" />
                    </div>

                    <div className=" relative mt-0">
                        <h2 className=" mt-0 my-3 text-3xl font-bold text-center md:text-left bg-gradient-to-r from-green-500 via
                         to-blue-700 bg-clip-text text-transparent sm:text-4xl">
                            = Quien soy </h2>
                        <p className="text-base md:text-xl mt-4 text-white">
                            Soy tecnólogo en desarrollo de software y estudiante de Ingeniería de Sistemas, con experiencia en desarrollo Full Stack. Tengo la capacidad de construir aplicaciones
                            web completas, desde el diseño del front-end hasta el desarrollo del back-end, la configuración de bases de datos y su despliegue en producción.
                            me apasiona crear soluciones funcionales, escalables y de alto impacto. Siempre enfocado en el aprendizaje continuo,
                            el trabajo colaborativo y la entrega de resultados de calidad.
                        </p>

                    </div>


                </div>

            </ContainerPage>

        </>
    );
};

export default PageAboutMe;