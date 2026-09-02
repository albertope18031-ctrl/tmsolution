import React from "react";
import { SupplyCategory } from "@/types/supplies";

interface SupplyCardProps {
  category: SupplyCategory;
}

export const SupplyCard: React.FC<SupplyCardProps> = ({ category }) => {
  const IconComponent = category.icon;

  return (
    <div className="group relative bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(15,45,89,0.08)] hover:border-[#0F2D59]/30 overflow-hidden">
      {/* Franja Superior de Acento de 3px en Azul Corporativo que se intensifica al hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#0F2D59] transition-colors duration-300" />

      {/* Bloque Superior: Icono, Título y Descripción */}
      <div>
        {/* Contenedor del Icono 56x56px */}
        <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-xl bg-[#EBF1F8] flex items-center justify-center text-[#0F2D59] mb-5 transition-transform duration-300 group-hover:scale-105">
          <IconComponent className="w-7 h-7 text-[#0F2D59]" />
        </div>

        {/* Título H3 de la Categoría */}
        <h3 className="text-[18px] font-bold text-[#0F2D59] font-montserrat leading-snug mb-2.5">
          {category.title}
        </h3>

        {/* Bajada Conceptual */}
        <p className="text-[14px] text-[#5A6578] leading-relaxed mb-5 font-normal">
          {category.description}
        </p>

        {/* Viñetas de Productos y Alcance */}
        <ul className="space-y-2.5 mb-6 text-[13px] text-[#1F242E]">
          {category.bulletPoints.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F2D59] mt-1.5 flex-shrink-0" />
              <span className="leading-tight text-[#1F242E]/90">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bloque Inferior: Enlace de Acción Interactivo con Micro-desplazamiento */}
      <div className="pt-4 border-t border-[#F0F2F5] mt-auto">
        <a
          href={category.actionHref}
          className="group/link inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0F2D59] hover:text-[#0A1F3D] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] rounded"
        >
          <span>{category.actionLabel}</span>
          <span className="inline-block transform transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};
