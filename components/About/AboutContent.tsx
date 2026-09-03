"use client";

import React, { useRef, useState, useEffect } from "react";
import { AboutKPIs } from "./AboutKPIs";

export const AboutContent: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Viewport trigger calibrado para móvil y desktop (threshold 0.1, margin -20px)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-start text-left w-full">
      {/* Contenedor Unificado de Textos con Animación Fade In Right (2s) */}
      <div
        ref={textRef}
        className={`w-full flex flex-col items-start text-left ${
          isInView
            ? "animate-fade-in-right-slow"
            : "opacity-0 -translate-x-[35px]"
        }`}
      >
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
      </div>

      {/* Mini-cuadrícula de Métricas Numéricas (KPIs) - Preservada e Intacta */}
      <AboutKPIs />
    </div>
  );
};
