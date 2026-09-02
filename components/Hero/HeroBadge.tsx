import React from "react";

export const HeroBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F4F6F9] border border-[#E2E8F0] shadow-sm mb-5 w-fit">
      {/* Punto indicador de disponibilidad inmediata en Verde WhatsApp #25D366 */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
      </span>
      
      {/* Texto de la etiqueta en 12px Bold, mayúsculas con espaciado 0.1em y color #0F2D59 */}
      <span className="text-[12px] font-bold text-[#0F2D59] uppercase tracking-[0.1em] font-sans select-none">
        PROVEEDOR INDUSTRIAL Y CORPORATIVO
      </span>
    </div>
  );
};
