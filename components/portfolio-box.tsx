import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string,
        technologies: string[]
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { title, image, urlDemo, urlGithub, technologies } = data

    return (
        <div className="w-80 sm:w-full md:max-w p-6 rounded-xl shadow-md hover:shadow-lg border border-slate-200 hover:border-emerald-300 transition-all duration-300">
            <h3 className="text-center mb-12 text-xl sm:text-2xl font-bold text-slate-800">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={500} height={500} className="w-full md:w-[500px] rounded-2xl h-auto transition-transform duration-700 hover:scale-105"
            />

            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 px-4 transition duration-150 rounded-lg bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200 hover:shadow-md font-semibold"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 px-4 transition duration-150 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-md font-semibold"
                >
                    View Site
                </Link>
            </div>
            <div className="mt-4 text-sm gap-5 text-slate-600 font-medium">
                {technologies.join(', ')}
            </div>
        </div>
    );
}

export default PortfolioBox;
