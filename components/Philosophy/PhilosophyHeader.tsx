import React from "react";

export const PhilosophyHeader: React.FC = () => {
  return (
    <div className="max-w-[650px] mx-auto text-center mb-10 sm:mb-14">
      {/* Kicker Superior */}
      <span className="inline-block text-[12px] sm:text-[13px] font-bold text-[#0F2D59] uppercase tracking-wider mb-2 select-none">
        FILOSOFÍA Y COMPROMISO
      </span>

      {/* Titular H2 Semántico */}
      <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1F242E] font-montserrat leading-tight tracking-tight mb-4">
        Lo Que Nos Distingue en el Mercado Industrial
      </h2>

      {/* Bajada de Contexto */}
      <p className="text-[14px] sm:text-[16px] text-[#5A6578] font-normal leading-relaxed">
        Nuestros principios operativos garantizan entregas puntuales, precios justos y una relación comercial de largo plazo con cada empresa.
      </p>
    </div>
  );
};
