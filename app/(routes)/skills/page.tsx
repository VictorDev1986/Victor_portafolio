"use client";
import ContainerPage from "@/components/container";
import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import TechnologiesSection from "@/components/TechnologiesSection";

const PageAboutMe = () => {
    return (
        <>
            <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                <h2 className=" mt-0 my-3 text-2xl font-bold text-center md:block md:text-center text-while sm:text-4xl">
                    = Skills</h2>
                <div>
                    <TechnologiesSection />
                </div>

            </ContainerPage>

        </>
    );
};

export default PageAboutMe;