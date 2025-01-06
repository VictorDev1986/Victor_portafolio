import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex flex-col md:flex-row h-min py-14 gap-4">
            
            <div className="w-full md:w-1/2 bg-black/20 rounded-lg flex items-center justify-center p-6">
                <h1 className="text-xl md:text-3xl font-bold text-center px-4">
                    "En busca de nuevas oportunidades. ¡Hablemos y trabajemos juntos!"
                </h1>
            </div>

            <div className="w-full md:w-1/2 bg-black/20 rounded-lg flex flex-col items-center justify-center p-8">
                <p className="text-xl mb-4 text-white text-center">
                    <a href="mailto:victordev1986@gmail.com">victordev1986@gmail.com</a>
                </p>
                <a
                    href="/public/CV.pdf" // Reemplaza con la URL de tu CV
                    download
                    className="p-2 transition duration-150 rounded-lg border-2 text-white border-green-500 hover:shadow-xl hover:shadow-green-500"
                >
                    Descargar CV
                </a>
            </div>
            
        </div>
    );
};

export default ContactPage;
