"use client";

import React, { useEffect } from "react";
import { NAV_ITEMS } from "./DesktopNav";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onToggle,
  onClose,
}) => {
  const { openModal } = useQuoteModal();
  // Cerrar menú con tecla Escape para accesibilidad
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Manejador para clics en enlaces móviles: cierra el menú y permite el desplazamiento suave
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="lg:hidden">
      {/* Botón Disparador Hamburguesa (48px x 48px para ergonomía táctil) */}
      <button
        type="button"
        onClick={onToggle}
        className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg text-[#0F2D59] hover:bg-[#F4F6F9] active:bg-[#E5E7EB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59]"
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between items-center pointer-events-none">
          {/* Línea superior */}
          <span
            className={`w-6 h-[2.5px] bg-[#0F2D59] rounded-full transition-all duration-300 transform origin-left ${
              isOpen ? "rotate-45 translate-x-1 -translate-y-0.5" : ""
            }`}
          />
          {/* Línea media */}
          <span
            className={`w-6 h-[2.5px] bg-[#0F2D59] rounded-full transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Línea inferior */}
          <span
            className={`w-6 h-[2.5px] bg-[#0F2D59] rounded-full transition-all duration-300 transform origin-left ${
              isOpen ? "-rotate-45 translate-x-1 translate-y-0.5" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay translúcido para tapar el fondo si el menú está abierto */}
      <div
        className={`fixed inset-0 top-[64px] bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel Desplegable (Drawer) */}
      <div
        id="mobile-navigation-menu"
        className={`fixed top-[64px] left-0 w-full bg-white border-b border-[#E5E7EB] shadow-[0_10px_20px_rgba(0,0,0,0.08)] z-50 transition-all duration-300 ease-out origin-top lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-[calc(100vh-64px)] overflow-y-auto visible"
            : "opacity-0 -translate-y-2 max-h-0 overflow-hidden invisible pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 flex flex-col gap-2">
          {/* Enlaces de Navegación Móvil */}
          <nav aria-label="Navegación móvil" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center min-h-[48px] px-4 py-3 text-[16px] font-medium text-[#1F242E] hover:text-[#0F2D59] hover:bg-[#F4F6F9] active:bg-[#E5E7EB] rounded-lg transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Divisor sutil */}
          <div className="h-px bg-[#E5E7EB] my-2" />

          {/* Botón CTA a ancho completo en móvil */}
          <button
            type="button"
            onClick={() => {
              onClose();
              openModal();
            }}
            data-open-modal="quote"
            className="w-full h-[46px] min-h-[46px] bg-[#0F2D59] hover:bg-[#0A1F3D] active:bg-[#08172E] text-white font-semibold text-[15px] rounded-[8px] flex items-center justify-center shadow-[0_4px_10px_rgba(15,45,89,0.15)] transition-all duration-200 cursor-pointer"
          >
            Cotiza sin compromiso
          </button>
        </div>
      </div>
    </div>
  );
};
