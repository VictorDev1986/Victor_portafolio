"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import { MotionTransition } from "./transition-component";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-50 flex flex-col items-center justify-center w-full mt-auto h-max bottom-4 sm:bottom-12 pointer-events-none">
            <nav className="pointer-events-auto">
                <div className="flex items-center justify-center gap-2 sm:gap-6 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-slate-200/60 ring-1 ring-slate-200/50">
                    {itemsNavbar.map((item) => {
                        const isActive = router === item.link;
                        return (
                            <Link
                                key={item.id}
                                href={item.link}
                                className="group relative flex items-center justify-center"
                            >
                                <div
                                    className={`
                                        p-2 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1
                                        ${isActive
                                            ? 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-100'
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-emerald-600'
                                        }
                                    `}
                                >
                                    <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Tooltip */}
                                <span className={`
                                    absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2
                                    bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-xl
                                    opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                                    pointer-events-none whitespace-nowrap hidden sm:block
                                `}>
                                    {item.title}
                                    {/* Triángulo del tooltip */}
                                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 rotate-45 transform"></span>
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar;