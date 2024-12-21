import ContainerPage from "@/components/container";
import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import IconCloud from "@/components/icon-cloud";

const PageAboutMe = () => {
    const slugs = [
        "typescript",
        "javascript",
        "nextjs",
        "react",
        "html5",
        "css3",
        "tailwindcss",
        "bootstrap",
        "express",
        "nodejs",
        "mongodb",
        "vercel",
        "git",
        "github",
        "visualstudiocode",
        "figma",
    ];
    return (
        <>
            <CoverParticles />
            <TransitionPage />
            <ContainerPage>
            <h2 className=" mt-0 my-3 text-3xl font-bold text-left md:block md:text-center  bg-gradient-to-r from-green-500 via
                         to-blue-700 bg-clip-text text-transparent sm:text-4xl">
                            = Habilidades</h2>

                <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden mx-auto my-auto">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </ContainerPage>

        </>
    );
};

export default PageAboutMe;