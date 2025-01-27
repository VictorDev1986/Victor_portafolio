import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
        technologies: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub, technologies } = data

    return (
        <div
            key={id}
            className="w-80 sm:w-full md:max-w  bg-black/50  p-4 mb-2 rounded-xl shadow-xl border-gray-300"
        >
            <h3 className="text-center mb-4 text-xl sm:text-2xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={500} height={500} className="w-full md:w-[500px] rounded-2xl h-auto transition-transform duration-700 hover:scale-125"
            />
            <div className="mt-4 text-sm gap-5 text-gray-400">
                {technologies}
            </div>
            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg  bg-black/35  text-while border-green-500 hover:shadow-xl hover:shadow-green-500  "
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg border-2  text-while border-green-500 hover:shadow-xl hover:shadow-green-500"
                >
                    Ver Sitio
                </Link>
            </div>
        </div>

    );
}

export default PortfolioBox;
