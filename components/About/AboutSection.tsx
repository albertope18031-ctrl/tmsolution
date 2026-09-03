import React from "react";
import { AboutVisual } from "./AboutVisual";
import { AboutContent } from "./AboutContent";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="nosotros"
      className="relative w-full bg-white pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 mt-0 mb-0 scroll-mt-[90px] border-b border-[#E5E7EB] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* En Móvil: Visual debajo del texto / En Desktop: Columna Izquierda */}
          <div className="order-2 lg:order-1">
            <AboutVisual />
          </div>

          {/* En Móvil: Contenido primero / En Desktop: Columna Derecha */}
          <div className="order-1 lg:order-2">
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
};
