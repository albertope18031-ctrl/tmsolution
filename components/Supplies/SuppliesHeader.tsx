import React from "react";

export const SuppliesHeader: React.FC = () => {
  return (
    <div className="max-w-[650px] mx-auto text-center mb-8 sm:mb-12 lg:mb-14">
      {/* Kicker Superior */}
      <span className="inline-block text-[12px] sm:text-[13px] font-bold text-[#0F2D59] uppercase tracking-wider mb-2 select-none">
        CATÁLOGO Y LÍNEAS DE SUMINISTRO
      </span>

      {/* Titular H2 Semántico */}
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1F242E] font-montserrat leading-tight tracking-tight mb-4">
        Soluciones de Aprovisionamiento para Cada Área de tu Empresa
      </h2>

      {/* Párrafo Descriptivo de Alcance */}
      <p className="text-[14px] sm:text-[16px] text-[#5A6578] font-normal leading-relaxed">
        Desde herramientas técnicas de alta exigencia hasta consumibles de oficina y seguridad laboral certificada. Centralizamos tus compras en un solo proveedor de confianza.
      </p>
    </div>
  );
};
