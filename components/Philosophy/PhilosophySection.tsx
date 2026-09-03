import React from "react";
import { PhilosophyHeader } from "./PhilosophyHeader";
import { MissionVisionCards } from "./MissionVisionCards";

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="mision-vision"
      className="relative w-full bg-white pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-16 lg:pb-20 scroll-mt-[90px] border-b border-[#E5E7EB] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del Submódulo 5A */}
        <PhilosophyHeader />

        {/* Bloque Paralelo 50/50: Misión y Visión */}
        <MissionVisionCards />
      </div>
    </section>
  );
};
