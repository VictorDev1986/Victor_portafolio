"use client"
import { CoverParticles } from "@/components/cover-particles";

import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";



const PortfolioPage = () => {

    return (
        <>
            <CoverParticles />
            <ContainerPage>
                <TransitionPage />
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl font-bold text-center md:block md:text-center text-while sm:text-4xl">Mis últimos trabajos</h1>

                    <div className="relative z-10 grid max-w-6xl gap-6 mx-auto mt-12 md:grid-cols-3 justify-center">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>

            </ContainerPage>
        </>
    );
}

export default PortfolioPage;