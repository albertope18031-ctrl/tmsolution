"use client";

import React, { useRef, useState } from "react";
import { SUPPLY_CATEGORIES } from "@/data/suppliesData";
import { SupplyCard } from "./SupplyCard";

interface SuppliesCarouselProps {
  carouselRef: React.RefObject<HTMLDivElement>;
}

export const SuppliesCarousel: React.FC<SuppliesCarouselProps> = ({ carouselRef }) => {
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = carouselRef.current;
    if (!el) return;
    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const el = carouselRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 6) {
      setIsDragging(true);
    }
    el.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDown.current = false;
    // Micro tiempo para evitar que un click se dispare tras arrastrar
    setTimeout(() => setIsDragging(false), 80);
  };

  return (
    <div className="relative w-full">
      {/* Contenedor Desplazable con Touch Swipe y CSS Scroll Snap */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {SUPPLY_CATEGORIES.map((category) => (
          <div
            key={category.id}
            data-card
            className="w-[85%] min-w-[85%] max-w-[85%] sm:w-[48%] sm:min-w-[48%] sm:max-w-[48%] lg:w-[32%] lg:min-w-[32%] lg:max-w-[32%] shrink-0 snap-start flex flex-col"
          >
            <SupplyCard category={category} isDragging={isDragging} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Exportamos también como SuppliesGrid para máxima compatibilidad
export const SuppliesGrid = SuppliesCarousel;
