import { dataAboutPage } from "@/data";



interface TimeLineItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    certificateLink?: string;
}

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
                <div className="my-6">
                    {dataAboutPage.map((data: TimeLineItem) => (
                        <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                            {/* Vertical Line */}
                            <div className="absolute left-2 sm:left-0 w-px h-full bg-slate-800 sm:ml-[6.5rem] top-0 group-last:h-[2rem]"></div>

                            {/* Dot indicator */}
                            <div className="absolute left-2 sm:left-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 sm:ml-[6.5rem] top-8 -translate-x-[0.45rem]"></div>

                            {/* Date Badge */}
                            <time className="sm:absolute left-0 top-7 inline-flex items-center justify-center text-xs font-semibold w-24 h-6 mb-3 sm:mb-0 text-emerald-400 bg-emerald-900/30 border border-emerald-500/20 rounded-full">
                                {data.date}
                            </time>

                            {/* Card Content */}
                            <div className="bg-black/50 p-5 rounded-xl border border-slate-800/50 hover:border-indigo-500/30 transition-colors duration-300">
                                <h3 className="text-xl font-bold text-white mb-1">{data.title}</h3>
                                <h4 className="text-indigo-400 font-semibold mb-3 text-sm tracking-wide uppercase">{data.subtitle}</h4>
                                <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                    {data.description}
                                </div>
                                {data.certificateLink && (
                                    <a
                                        href={data.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-xs font-semibold text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                                    >
                                        Ver Certificado
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default TimeLine;