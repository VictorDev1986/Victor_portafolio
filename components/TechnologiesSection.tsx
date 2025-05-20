import React from "react";
import { technologies } from "@/data";


interface TechnologyCardProps {
    name: string;
    icon: React.ReactNode;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, icon }) => (
    <div className="flex flex-col items-center justify-center  bg-black/50  text-center rounded-lg shadow-md p-6">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      
    </div>
);

const TechnologiesSection = () => (
    <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
           
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((data) => (
                    <TechnologyCard
                        key={data.name}
                        name={data.name}
                        icon={data.icon}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default TechnologiesSection;
