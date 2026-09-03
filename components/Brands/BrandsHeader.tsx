import React from "react";

export const BrandsHeader: React.FC = () => {
  return (
    <div className="max-w-[620px] mx-auto text-center mb-8 sm:mb-10">
      {/* Kicker Superior */}
      <span className="inline-block text-[12px] sm:text-[13px] font-bold text-[#0F2D59] uppercase tracking-wider mb-2 select-none">
        ECOSISTEMA DE PROVEEDORES
      </span>

      {/* Titular H2 Semántico */}
      <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1F242E] font-montserrat leading-tight tracking-tight mb-3">
        Marcas Líderes que Respaldan Nuestras Soluciones
      </h2>

      {/* Subtexto Descriptivo */}
      <p className="text-[14px] sm:text-[15px] text-[#5A6578] font-normal leading-relaxed">
        Distribuimos insumos con certificación y garantía directa de los fabricantes más reconocidos del mercado nacional e internacional.
      </p>
    </div>
  );
};
