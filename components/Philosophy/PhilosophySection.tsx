import React from "react";
import { MissionVisionCards } from "./MissionVisionCards";

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="mision-vision"
      className="relative w-full bg-[#F4F6F9] py-10 lg:py-16 scroll-mt-[90px] border-b border-[#E2E8F0] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloque Paralelo 50/50: Misión y Visión */}
        <MissionVisionCards />
      </div>
    </section>
  );
};
