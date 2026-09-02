import React from "react";
import { Brand } from "@/types/brand";

interface BrandCardProps {
  brand: Brand;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <div
      className="group relative bg-white border border-[#E5E7EB] hover:border-[#0F2D59] rounded-lg h-16 sm:h-[72px] lg:h-[84px] p-3 sm:p-4 flex items-center justify-center text-center transition-all duration-300 ease-in-out hover:scale-[1.04] hover:shadow-[0_8px_16px_rgba(15,45,89,0.08)] cursor-pointer select-none overflow-hidden"
      title={`${brand.name} - ${brand.tagline || "Distribuidor Autorizado"}`}
    >
      {/* Indicador de categoría sutil en la esquina superior derecha */}
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#0F2D59]/20 group-hover:bg-[#25D366] transition-colors duration-300" />

      {/* Logotipo de Marca con Efecto Grayscale (100% -> 0%) y Opacidad (65% -> 100%) */}
      <div className="flex flex-col items-center justify-center w-full filter grayscale group-hover:grayscale-0 opacity-65 group-hover:opacity-100 transition-all duration-300 transform">
        <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold font-montserrat tracking-tight text-[#0F2D59] group-hover:text-[#0A1F3D] transition-colors leading-none truncate max-w-[90%]">
          {brand.name}
        </span>
        {brand.tagline && (
          <span className="text-[9px] sm:text-[10px] text-[#5A6578] font-medium leading-tight mt-1 line-clamp-1 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {brand.tagline}
          </span>
        )}
      </div>
    </div>
  );
};
