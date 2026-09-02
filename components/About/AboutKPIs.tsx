import React from "react";

interface KPIItem {
  value: string;
  label: string;
}

const KPIS: KPIItem[] = [
  {
    value: "+9 Años",
    label: "De experiencia en suministro industrial y corporativo",
  },
  {
    value: "+50 Marcas",
    label: "Líderes con distribución y garantía de fábrica",
  },
  {
    value: "100% Cobertura",
    label: "Entregas en planta, taller y corporativo a tiempo",
  },
];

export const AboutKPIs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-[#E2E8F0]">
      {KPIS.map((kpi, index) => (
        <div
          key={index}
          className="flex flex-col text-left p-3.5 rounded-lg bg-[#F4F6F9] border border-[#E5E7EB]/80"
        >
          <span className="text-[26px] sm:text-[30px] font-extrabold text-[#0F2D59] font-montserrat leading-none tracking-tight mb-1.5">
            {kpi.value}
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-[#5A6578] leading-snug">
            {kpi.label}
          </span>
        </div>
      ))}
    </div>
  );
};
