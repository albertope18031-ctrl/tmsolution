import React from "react";
import { CORPORATE_VALUES } from "@/data/valuesData";

export const CorporateValues: React.FC = () => {
  return (
    <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E2E8F0]">
      {/* Subtítulo del Bloque de Valores */}
      <div className="text-center mb-6 sm:mb-8">
        <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#5A6578] uppercase tracking-wider select-none">
          Nuestros Valores
        </h4>
      </div>

      {/* Retícula Adaptativa de los 8 Valores (4 cols desktop / 2-4 tablet / 2 móvil) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4">
        {CORPORATE_VALUES.map((val) => (
          <div
            key={val.id}
            className="group bg-white border border-[#E2E8F0] hover:border-[#0F2D59] rounded-[10px] h-[52px] sm:h-[56px] px-4 flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(15,45,89,0.08)] select-none"
          >
            {/* Punto indicador corporativo en azul TM SOLUTION */}
            <span className="w-2 h-2 rounded-full bg-[#0F2D59] group-hover:bg-[#25D366] transition-colors duration-200 flex-shrink-0" />
            
            {/* Texto del Valor */}
            <span className="text-[13px] sm:text-[14px] font-semibold text-[#1F242E] group-hover:text-[#0F2D59] transition-colors duration-200 leading-none">
              {val.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
