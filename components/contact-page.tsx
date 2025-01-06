import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex flex-col md:flex-row h-min py-8">
            {/* Left side with a message */}
            <div className="w-full md:w-1/2 bg-black/30 flex items-center justify-center text-white p-6">
                <h1 className="text-2xl md:text-4xl font-bold text-center px-4">
                    Estoy buscando empleo. ¡Contáctame para colaborar juntos!
                </h1>
            </div>

            <div className="w-full md:w-1/2 bg-black/30 flex flex-col items-center justify-center p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Escribeme</h2>
                <p className="mb-4 text-while text-center">victordev1986@gmail.com</p>
                <a
                    href="/path/to/your-cv.pdf" // Reemplaza con la URL de tu CV
                    download
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
                >
                    Descargar CV
                </a>
            </div>
        </div>
    );
};

export default ContactPage;
