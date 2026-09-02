"use client";

import React, { useState, useMemo } from "react";
import { BRANDS_DATA } from "@/data/brandsData";
import { BrandCard } from "./BrandCard";
import { BrandTabs, FilterCategory } from "./BrandTabs";

export const BrandGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterCategory>("all");

  const counts = useMemo(() => {
    return {
      all: BRANDS_DATA.length,
      epp: BRANDS_DATA.filter((b) => b.category === "epp").length,
      herramienta: BRANDS_DATA.filter((b) => b.category === "herramienta").length,
      oficina: BRANDS_DATA.filter((b) => b.category === "oficina").length,
    };
  }, []);

  const filteredBrands = useMemo(() => {
    if (activeTab === "all") return BRANDS_DATA;
    return BRANDS_DATA.filter((brand) => brand.category === activeTab);
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* Selector de Pestañas Interactivas */}
      <BrandTabs
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        counts={counts}
      />

      {/* Retícula Modular Adaptativa (6 cols desktop / 4 cols tablet / 2-3 cols móvil) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3.5 lg:gap-4">
        {filteredBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>

      {/* Nota de Solvencia al Pie del Muro de Marcas */}
      <div className="mt-8 sm:mt-10 text-center">
        <p className="text-xs sm:text-sm text-[#5A6578]">
          ¿No encuentras la marca que buscas?{" "}
          <a
            href="#cotizar?cat=especial"
            className="text-[#0F2D59] font-bold underline hover:text-[#0A1F3D] transition-colors"
          >
            Pregúntanos por adquisiciones especiales
          </a>{" "}
          y la conseguimos bajo pedido.
        </p>
      </div>
    </div>
  );
};
