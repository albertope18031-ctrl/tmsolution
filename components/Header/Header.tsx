"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };

    // Scroll listener optimizado con flag { passive: true } para garantizar 60 FPS en el main thread
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Verificación inicial por si la página carga con scroll previo
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_4px_14px_rgba(15,45,89,0.08)] border-b border-[#E5E7EB]/50"
          : "bg-white/95 backdrop-blur-md border-b border-[#F0F2F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Bloque Izquierdo: Logotipo Corporativo */}
        <Logo onClick={handleMobileClose} />

        {/* Bloque Central y Derecho (Desktop ≥ 1024px): Navegación y CTA */}
        <DesktopNav />

        {/* Bloque Móvil (< 1024px): Disparador y Menú Desplegable */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          onToggle={handleMobileToggle}
          onClose={handleMobileClose}
        />
      </div>
    </header>
  );
};
