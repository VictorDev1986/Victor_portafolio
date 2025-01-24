"use client"
import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";

const AboutMePage = () => {
    return (
        <>
        <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                
                <h1 className="mt-0 my-3 text-2xl font-bold text-center md:block md:text-center text-while sm:text-4xl">
                    Mi experiencia y formacion
                </h1>
                
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;