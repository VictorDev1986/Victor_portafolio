"use client"
import ContainerPage from "@/components/container";
import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ContactCard from "@/components/ContactCard";
import Botones from "@/components/botones";



const PageAboutMe = () => {
    return (
        <>
            <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                <div>
                <h2 className=" mt-0 my-3 text-2xl font-bold text-center md:block md:text-center text-while sm:text-4xl">
                            = Hablemos</h2>
                </div>
               <ContactCard />
                            
            </ContainerPage>

        </>
    );
};

export default PageAboutMe;
