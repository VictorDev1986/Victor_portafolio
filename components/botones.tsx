'use client';

import React from 'react';
import Link from 'next/link';

const Botones = () => {
    return (
        <div>
           <div className="flex gap-5 mt-2">
                <Link
                    href="/Victor Sanchez.pdf"
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg  lg border-2 text-while border-green-500 hover:shadow-xl hover:shadow-green-500  "
                >
                    Hoja de vida
                </Link>

                <Link
                    href="https://github.com/VictorDev1986 "
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg lg border-2  text-while border-green-500 hover:shadow-xl hover:shadow-green-500"
                >
                    Git Hub
                </Link>
            </div>
        </div>
    );
}

export default Botones;