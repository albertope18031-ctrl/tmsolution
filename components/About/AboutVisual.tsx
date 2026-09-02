import React from "react";
import Image from "next/image";

export const AboutVisual: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Contenedor Principal de la Imagen con Sombra y Esquinas Redondeadas de 16px */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(15,45,89,0.08)] border border-[#E2E8F0] bg-[#0A1F3D]">
        <Image
          src="/images/about-operations.svg"
          alt="Operaciones de almacenamiento y logística TM SOLUTION"
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Degradado Sutil de Resguardo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Tarjeta Flotante Superpuesta en la Esquina Inferior */}
      <div className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-4 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#E2E8F0] shadow-[0_12px_28px_rgba(15,45,89,0.12)] flex items-center gap-3.5 max-w-[300px] sm:max-w-xs transition-transform duration-300 hover:scale-[1.02]">
        <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-lg bg-[#0F2D59] text-white flex items-center justify-center font-bold">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[14px] font-bold text-[#0F2D59] leading-tight font-montserrat">
            +9 Años de Trayectoria
          </span>
          <span className="text-[11px] font-medium text-[#5A6578] mt-0.5">
            Garantía y respaldo empresarial
          </span>
        </div>
      </div>
    </div>
  );
};
