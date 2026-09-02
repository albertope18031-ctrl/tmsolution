"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      className="flex items-center group transition-transform duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59] focus-visible:ring-offset-2 rounded-md"
      aria-label="TM SOLUTION - Ir al inicio"
    >
      <Image
        src="/logo-tm.png"
        alt="TM SOLUTION - Suministros Industriales"
        width={608}
        height={465}
        priority
        className="h-10 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
      />
    </a>
  );
};
