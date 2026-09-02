import React from "react";
import { PhilosophyHeader } from "./PhilosophyHeader";
import { MissionVisionCards } from "./MissionVisionCards";
import { CorporateValues } from "./CorporateValues";

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="mision-vision"
      className="relative w-full bg-white py-12 sm:py-16 lg:py-24 scroll-mt-[90px] border-b border-[#E5E7EB] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del Submódulo 5A */}
        <PhilosophyHeader />

        {/* Bloque Paralelo 50/50: Misión y Visión */}
        <MissionVisionCards />

        {/* Matriz de los 8 Valores Corporativos */}
        <CorporateValues />
      </div>
    </section>
  );
};
