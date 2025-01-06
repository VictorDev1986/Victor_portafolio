import ContainerPage from "@/components/container";
import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ContactPage from "@/components/contact-page";


const PageAboutMe = () => {
    return (
        <>
            <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                <div>
                <h2 className=" mt-0 my-3 text-2xl font-bold text-center md:block md:text-center bg-gradient-to-r from-green-500 via
                         to-blue-700 bg-clip-text text-transparent sm:text-4xl">
                            = Hablemos</h2>
                            <ContactPage />
                </div>
            </ContainerPage>

        </>
    );
};

export default PageAboutMe;
