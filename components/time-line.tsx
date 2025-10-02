import { dataAboutPage } from "@/data";


const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto md:pb-40 md:pt-20">
                <div className="-my-6">
                    {dataAboutPage.map((data) => (
                        <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                            <h3 className="mb-3 text-lg sm:text-xl md:text-xl lg:text-2xl font-bold sm:mb-2 text-slate-300 leading-relaxed">{data.title}</h3>
                            <div className="flex flex-col sm:flex-row items-start mb-3 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs sm:text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-black/50 rounded-full">{data.date}</time>
                                <div className="text-lg sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed">{data.subtitle}</div>
                            </div>
                            <p className="text-slate-300 mx-auto mt-0 text-lg sm:text-xl md:text-xl lg:text-2xl md:mx-0 md:mb-6 leading-relaxed font-medium">{data.description}</p>
                            {data.certificateLink && (
                                <a 
                                    href={data.certificateLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-lg sm:text-xl md:text-xl lg:text-2xl text-green-400 hover:text-green-300 font-medium underline transition-colors duration-200"
                                >
                                    Ver Certificado
                                </a>
                            )}
                            <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 text-sm">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TimeLine;