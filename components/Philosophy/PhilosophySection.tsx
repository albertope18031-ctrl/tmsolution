import React from "react";
import { MissionVisionCards } from "./MissionVisionCards";

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="mision-vision"
      className="relative w-full bg-white pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-16 lg:pb-20 scroll-mt-[90px] border-b border-[#E5E7EB] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloque Paralelo 50/50: Misión y Visión */}
        <MissionVisionCards />
      </div>
    </section>
  );
};
