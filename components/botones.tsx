'use client';

const Botones = () => {
    return (
        <div className="relative z-50">
           <div className="flex gap-5 mt-2">
                <a
                    href="/Victor%20Sanchez.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 px-4 transition duration-150 rounded-lg border-2 text-slate-700 border-emerald-500 hover:bg-emerald-50 hover:shadow-xl hover:shadow-emerald-500/30 font-semibold cursor-pointer"
                >
                    CV
                </a>

                <a
                    href="https://github.com/VictorDev1986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 px-4 transition duration-150 rounded-lg border-2 text-slate-700 border-emerald-500 hover:bg-emerald-50 hover:shadow-xl hover:shadow-emerald-500/30 font-semibold cursor-pointer"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Botones;