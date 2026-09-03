"use client";

import React, { useRef, useState, useEffect } from "react";

interface SuppliesHeaderProps {
  onPrev?: () => void;
  onNext?: () => void;
  canScrollLeft?: boolean;
  canScrollRight?: boolean;
}

export const SuppliesHeader: React.FC<SuppliesHeaderProps> = ({
  onPrev,
  onNext,
  canScrollLeft = false,
  canScrollRight = true,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Viewport trigger calibrado (threshold: 0.35 / rootMargin: -150px / once: true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -150px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
      {/* Bloque Izquierdo: Textos con Animación Fade In Right (2s) disparada al hacer Scroll */}
      <div
        ref={textRef}
        className={`max-w-2xl text-left ${
          isInView
            ? "animate-fade-in-right-slow"
            : "opacity-0 -translate-x-[35px]"
        }`}
      >
        {/* Kicker Superior */}
        <span className="inline-block text-[12px] sm:text-[13px] font-bold text-[#0F2D59] uppercase tracking-wider mb-2 select-none">
          CATÁLOGO Y LÍNEAS DE SUMINISTRO
        </span>

        {/* Titular H2 Semántico */}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1F242E] font-montserrat leading-tight tracking-tight mb-3">
          Soluciones de Aprovisionamiento para Cada Área de tu Empresa
        </h2>

        {/* Párrafo Descriptivo de Alcance */}
        <p className="text-[14px] sm:text-[16px] text-[#5A6578] font-normal leading-relaxed">
          Automatización, control, potencia y abastecimiento integral. Centralizamos tus compras en un solo proveedor de confianza con cobertura y entrega en todo México.
        </p>
      </div>

      {/* Bloque Derecho: Controles Circulares de Navegación (← y →) */}
      <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canScrollLeft}
          aria-label="Desplazar a tarjetas anteriores"
          className="w-12 h-12 rounded-full bg-white border border-[#E2E8F0] text-[#0F2D59] hover:bg-[#0F2D59] hover:text-white hover:border-[#0F2D59] disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#0F2D59] disabled:hover:border-[#E2E8F0] shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canScrollRight}
          aria-label="Desplazar a tarjetas siguientes"
          className="w-12 h-12 rounded-full bg-white border border-[#E2E8F0] text-[#0F2D59] hover:bg-[#0F2D59] hover:text-white hover:border-[#0F2D59] disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#0F2D59] disabled:hover:border-[#E2E8F0] shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
