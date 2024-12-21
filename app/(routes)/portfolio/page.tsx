import ContainerPage from "@/components/container";
import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";


const PageAboutMe = () => {
    return (
        <>
            <CoverParticles />
            <TransitionPage />
            <ContainerPage>
                <div>
                <h2 className=" mt-0 my-3 text-3xl font-bold text-left md:block md:text-center bg-gradient-to-r from-green-500 via
                         to-blue-700 bg-clip-text text-transparent sm:text-4xl">
                            = Portafolio</h2>
                </div>


            </ContainerPage>

        </>
    );
};

export default PageAboutMe;