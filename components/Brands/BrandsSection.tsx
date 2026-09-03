import React from "react";
import { BrandsHeader } from "./BrandsHeader";
import { BrandMarquee } from "./BrandMarquee";

export const BrandsSection: React.FC = () => {
  return (
    <section
      id="marcas"
      className="relative w-full bg-[#F4F6F9] border-y border-[#E2E8F0] pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 lg:pb-14 mt-0 scroll-mt-[90px] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del Muro */}
        <BrandsHeader />
      </div>

      {/* Carrusel Continuo Infinito de Marcas Líderes */}
      <div className="w-full mt-2 sm:mt-4">
        <BrandMarquee />
      </div>
    </section>
  );
};
