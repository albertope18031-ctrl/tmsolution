import React from "react";
import { BrandsHeader } from "./BrandsHeader";
import { BrandGrid } from "./BrandGrid";

export const BrandsSection: React.FC = () => {
  return (
    <section
      id="marcas"
      className="relative w-full bg-[#F4F6F9] border-y border-[#E2E8F0] py-14 sm:py-18 lg:py-20 scroll-mt-[90px] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del Muro */}
        <BrandsHeader />

        {/* Retícula Filtrable de Marcas */}
        <BrandGrid />
      </div>
    </section>
  );
};
