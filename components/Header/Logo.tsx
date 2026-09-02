"use client";

import React from "react";

interface LogoProps {
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      className="flex items-center gap-3 group transition-transform duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] focus-visible:ring-offset-2 rounded-md"
      aria-label="TM SOLUTION - Ir al inicio"
    >
      {/* Isotipo Cúbico 40x40px */}
      <div className="relative w-10 h-10 min-w-[40px] min-h-[40px] bg-[#0F2D59] rounded-lg flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
        {/* Detalle geométrico sutil de cubo / caja técnica */}
        <div className="absolute inset-0.5 border border-white/20 rounded-[6px] pointer-events-none" />
        <span className="text-white font-bold text-base tracking-wider font-montserrat select-none">
          TM
        </span>
      </div>

      {/* Bloque Tipográfico Corporativo */}
      <div className="flex flex-col justify-center text-left">
        <span className="text-[18px] font-bold text-[#0F2D59] leading-none tracking-tight font-montserrat group-hover:text-[#0A1F3D] transition-colors">
          TM SOLUTION
        </span>
        <span className="text-[10px] font-semibold text-[#5A6578] tracking-[0.14em] uppercase mt-1 leading-none font-sans">
          SUMINISTROS INDUSTRIALES
        </span>
      </div>
    </a>
  );
};
