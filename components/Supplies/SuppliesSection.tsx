import React from "react";
import { SuppliesHeader } from "./SuppliesHeader";
import { SuppliesGrid } from "./SuppliesGrid";

export const SuppliesSection: React.FC = () => {
  return (
    <section
      id="suministros"
      className="relative w-full bg-[#F4F6F9] py-12 sm:py-16 lg:py-24 scroll-mt-[90px] border-b border-[#E5E7EB] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de Sección */}
        <SuppliesHeader />

        {/* Retícula de 4 Tarjetas de Suministro */}
        <SuppliesGrid />
      </div>
    </section>
  );
};
