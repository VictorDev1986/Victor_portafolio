import Image from "next/image";
import Link from "next/link";
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
                    <h1 className=" mt-0 my-3 text-2xl font-bold text-center md:block md:text-center bg-gradient-to-r from-green-500 via
                         to-blue-700 bg-clip-text text-transparent sm:text-4xl">Mis últimos trabajos realizados</h1>

                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
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