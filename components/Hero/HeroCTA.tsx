"use client";

import React from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export const HeroCTA: React.FC = () => {
  const { openModal } = useQuoteModal();

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
      {/* Botón CTA Primario: Cotización sin compromiso (Abre Pop-up Modal) */}
      <button
        type="button"
        onClick={openModal}
        data-open-modal="quote"
        data-track="cta-hero-quote"
        className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center bg-[#0F2D59] hover:bg-[#0A1F3D] active:bg-[#08172E] text-white font-semibold text-[15px] px-7 py-3.5 rounded-[8px] shadow-[0_4px_14px_rgba(15,45,89,0.2)] hover:shadow-[0_6px_20px_rgba(15,45,89,0.28)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] focus-visible:ring-offset-2 text-center cursor-pointer"
      >
        Cotizar sin compromiso
      </button>

      {/* Botón CTA Secundario: Catálogo de marcas y productos */}
      <a
        href="#marcas"
        data-track="cta-hero-brands"
        className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center bg-white hover:bg-[#F4F6F9] active:bg-[#E5E7EB] border-2 border-[#0F2D59] text-[#0F2D59] hover:text-[#0A1F3D] font-semibold text-[15px] px-7 py-3.5 rounded-[8px] shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] focus-visible:ring-offset-2 text-center"
      >
        Ver marcas y productos
      </a>
    </div>
  );
};
