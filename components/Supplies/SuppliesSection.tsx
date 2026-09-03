"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { SuppliesHeader } from "./SuppliesHeader";
import { SuppliesGrid } from "./SuppliesGrid";

export const SuppliesSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 12);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 12);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScrollability();
    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);
    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const scrollPrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const scrollAmount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const scrollAmount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="suministros"
      className="relative w-full bg-[#F4F6F9] pt-5 sm:pt-6 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 scroll-mt-[90px] border-b border-[#E5E7EB] transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de Sección con Controles Circulares de Navegación */}
        <SuppliesHeader
          onPrev={scrollPrev}
          onNext={scrollNext}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
        />

        {/* Carrusel Interactivo Multidispositivo */}
        <SuppliesGrid carouselRef={carouselRef} />
      </div>
    </section>
  );
};
