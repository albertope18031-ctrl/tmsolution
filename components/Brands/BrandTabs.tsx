"use client";

import React from "react";
import { BrandCategory } from "@/types/brand";

export type FilterCategory = "all" | BrandCategory;

interface BrandTabsProps {
  activeTab: FilterCategory;
  onSelectTab: (tab: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
}

const TABS: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "Todas las Marcas" },
  { id: "epp", label: "Seguridad y EPP" },
  { id: "herramienta", label: "Herramienta e Industria" },
  { id: "oficina", label: "Tecnología y Oficina" },
];

export const BrandTabs: React.FC<BrandTabsProps> = ({
  activeTab,
  onSelectTab,
  counts,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const count = counts[tab.id];

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] ${
              isActive
                ? "bg-[#0F2D59] text-white shadow-[0_4px_12px_rgba(15,45,89,0.2)] scale-[1.02]"
                : "bg-white text-[#1F242E] hover:text-[#0F2D59] hover:bg-gray-50 border border-[#E2E8F0] shadow-sm"
            }`}
            aria-pressed={isActive}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-[#F4F6F9] text-[#5A6578]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
