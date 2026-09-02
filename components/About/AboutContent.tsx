import React from "react";
import { AboutKPIs } from "./AboutKPIs";

export const AboutContent: React.FC = () => {
  return (
    <div className="flex flex-col items-start text-left">
      {/* Kicker Institucional */}
      <span className="inline-block text-[12px] sm:text-[13px] font-bold text-[#0F2D59] uppercase tracking-wider mb-2 select-none">
        TRAYECTORIA Y RESPALDO
      </span>

      {/* Titular H2 Semántico */}
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1F242E] font-montserrat leading-tight tracking-tight mb-4">
        Tu Aliado Estratégico en Abastecimiento y Suministros
      </h2>

      {/* Cuerpo del Perfil Corporativo */}
      <p className="text-[14px] sm:text-[16px] text-[#5A6578] font-normal leading-relaxed mb-4">
        Somos una empresa dedicada a conocer las necesidades de nuestros clientes y brindarles soluciones a su medida. Nos enfocamos en proveerles toda clase de suministros de la mejor calidad y a los mejores precios, respaldados por más de 9 años de experiencia y una sólida cartera de proveedores nacionales e internacionales.
      </p>

      {/* Mini-cuadrícula de Métricas Numéricas (KPIs) */}
      <AboutKPIs />
    </div>
  );
};
