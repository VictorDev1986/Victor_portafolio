import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    return (
        <div
            key={id}
            className="w-80 sm:w-full  bg-black/50  p-4 mb-2 rounded-xl shadow-xl border-gray-300"
        >
            <h3 className="mb-4 text-xl sm:text-2xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="w-full md:w-[300px] rounded-2xl h-auto"
            />

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

export default PortfolioBox
