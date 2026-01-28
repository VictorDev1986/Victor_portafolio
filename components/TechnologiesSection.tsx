import React from "react";
import Image from "next/image";
import { technologiesByCategory, technologyCategoryConfigs, type TechnologyCategoryConfig } from "@/data";

interface TechnologyCardProps {
    id: number;
    name: string;
    icon?: React.ReactNode;
    iconUrl?: string;
}

const TechnologyIcon: React.FC<{ tech: TechnologyCardProps }> = ({ tech }) => {
    if (React.isValidElement(tech.icon)) {
        return React.cloneElement(tech.icon as React.ReactElement<any>, {
            size: 20,
        });
    }
     
    if (tech.iconUrl) {
        return (
            <Image
                src={tech.iconUrl}
                alt={tech.name}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
            />
        );
    }

    return <span className="h-2 w-2 rounded-full bg-emerald-300" />;
};

const TechnologyLine: React.FC<{ tech: TechnologyCardProps }> = ({ tech }) => (
    <div className="flex flex-wrap items-center gap-2 pl-6 text-xs text-slate-600 sm:text-sm">
        <span className="text-slate-400">{"{"}</span>
        <span className="text-indigo-500">tool</span>
        <span className="text-slate-400">:</span>
        <span className="inline-flex items-center gap-2">
            <TechnologyIcon tech={tech} />
            <span className="text-emerald-500">&quot;{tech.name}&quot;</span>
        </span>
        <span className="text-slate-400">{"},"}</span>
    </div>
);

const CategorySnippet: React.FC<{ config: TechnologyCategoryConfig }> = ({ config }) => {
    const stack = technologiesByCategory[config.key] ?? [];

    const openingLine = (
        <span>
            <span className="text-sky-500">export</span>{" "}
            <span className="text-blue-600">const</span>{" "}
            <span className="text-slate-900">{config.token}</span>{" "}
            <span className="text-slate-500">= [</span>
        </span>
    );

    const closingLine = <span className="text-slate-500">];</span>;

    const codeLines: React.ReactNode[] = [openingLine, ...stack.map((tech) => (
        <TechnologyLine key={tech.id} tech={tech} />
    )), closingLine];

    return (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-5 py-4 text-xs text-slate-200 font-semibold uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                    <span className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-rose-400" />
                        <span className="h-3 w-3 rounded-full bg-amber-300" />
                        <span className="h-3 w-3 rounded-full bg-emerald-300" />
                    </span>
                    <span className="font-mono text-[0.65rem] text-slate-200 normal-case tracking-normal">
                        {config.filePath}
                    </span>
                </div>
                <span className="text-emerald-200">{config.label}</span>
            </div>
            <div className="grid grid-cols-[auto,1fr] gap-x-4 px-5 py-6 font-mono text-[0.7rem] text-slate-700 sm:text-sm">
                {codeLines.map((line, index) => (
                    <React.Fragment key={`${config.key}-line-${index}`}>
                        <span className="select-none text-[0.6rem] text-slate-300 sm:text-xs">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="leading-relaxed text-slate-800">
                            {line}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const TechnologiesSection = () => (
    <section className="-mt-2 pt-24 pb-40 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            
            <div className="mt-16 grid gap-10 md:grid-cols-2">
                {technologyCategoryConfigs.map((config) => (
                    <CategorySnippet key={config.key} config={config} />
                ))}
            </div>
        </div>
    </section>
);

export default TechnologiesSection;
