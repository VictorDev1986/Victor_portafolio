"use client";

import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import Botones from "./botones";

const ContactCard: React.FC = () => {
  return (
    <div className="relative z-50 bg-white/80 backdrop-blur-sm mt-4 rounded-lg shadow-md hover:shadow-lg border border-slate-200 p-6 w-full max-w-md mx-auto transition-all duration-300">
      <div className="mb-4">
        <div className="flex items-center gap-4 mb-3 text-xl">
          <FaEnvelope className="text-emerald-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg text-slate-800">Email</h3>
            <p className="text-lg text-slate-600">
              <a href="mailto:victordev1986@gmail.com" className="text-slate-600 hover:text-emerald-600 hover:underline transition-colors">
                victordev1986@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <FaLinkedin className="text-emerald-600 text-xl" />
          <div>
            <h3 className="font-semibold text-lg text-slate-800">LinkedIn</h3>
            <p className="text-lg text-slate-600">
              <a href="https://www.linkedin.com/in/victorsanchez1986/" className="text-slate-600 hover:text-emerald-600 hover:underline transition-colors">
                @victor sanchez
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <FaPhone className="text-emerald-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg text-slate-800">Call Me</h3>
            <p className="text-lg text-slate-600">
              <a href="tel:+573013829208" className="text-slate-600 hover:text-emerald-600 hover:underline transition-colors">
                +57 301 382 9208
              </a>
            </p>
          </div>
        </div>
      </div>
      <Botones />
    </div>
  );
};

export default ContactCard;
