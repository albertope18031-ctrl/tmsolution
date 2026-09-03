"use client";

import React from "react";

import { useQuoteModal } from "@/context/QuoteModalContext";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Quiénes Somos?", href: "#nosotros" },
  { label: "Misión y Visión", href: "#mision-vision" },
  { label: "Suministros y Marcas", href: "#marcas" },
  { label: "Contacto", href: "#contacto" },
];

export const DesktopNav: React.FC = () => {
  const { openModal } = useQuoteModal();

  return (
    <div className="hidden lg:flex items-center justify-between flex-1 pl-10">
      {/* Bloque Central: Menú de Navegación Horizontal */}
      <nav aria-label="Navegación principal de escritorio" className="flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link text-[14px] font-semibold text-[#1F242E] hover:text-[#0F2D59] py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] rounded"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Bloque Derecho: Botón CTA Principal */}
      <div className="flex items-center pl-6">
        <button
          type="button"
          onClick={openModal}
          data-open-modal="quote"
          className="inline-flex items-center justify-center bg-[#0F2D59] hover:bg-[#0A1F3D] text-white text-[14px] font-semibold px-[22px] py-[10px] rounded-[8px] shadow-[0_4px_10px_rgba(15,45,89,0.15)] hover:shadow-[0_6px_14px_rgba(15,45,89,0.22)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] focus-visible:ring-offset-2 cursor-pointer"
        >
          Cotiza sin compromiso
        </button>
      </div>
    </div>
  );
};
