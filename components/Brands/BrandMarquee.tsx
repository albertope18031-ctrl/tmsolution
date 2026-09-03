import React from "react";
import Image from "next/image";

export interface MarqueeBrand {
  id: string;
  name: string;
  logo: string;
}

const BRANDS_LIST: MarqueeBrand[] = [
  { id: "3m", name: "3M", logo: "/marcas/3m.png" },
  { id: "abb", name: "ABB", logo: "/marcas/abb.png" },
  { id: "siemens", name: "Siemens", logo: "/marcas/siemens.png" },
  { id: "honeywell", name: "Honeywell", logo: "/marcas/honeywell.png" },
  { id: "timken", name: "Timken", logo: "/marcas/timken.png" },
  { id: "baldor", name: "Baldor", logo: "/marcas/baldor.png" },
  { id: "dodge", name: "Dodge", logo: "/marcas/dodge.png" },
  { id: "ntn", name: "NTN", logo: "/marcas/ntn.png" },
  { id: "dayco", name: "Dayco", logo: "/marcas/dayco.png" },
];

// Duplicamos el listado para garantizar un ciclo 100% continuo sin saltos ni espacios vacíos en cualquier resolución
const MARQUEE_ITEMS = [...BRANDS_LIST, ...BRANDS_LIST, ...BRANDS_LIST, ...BRANDS_LIST];

export const BrandMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-5 select-none marquee-mask">
      {/* Carril Deslizante Continuo Infinito (35s linear) - No se detiene con interacción */}
      <div className="flex w-max animate-marquee-scroll items-center gap-12 sm:gap-16 pointer-events-none">
        {MARQUEE_ITEMS.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex items-center justify-center flex-shrink-0 px-2 sm:px-4"
          >
            <Image
              src={brand.logo}
              alt={`Logotipo oficial ${brand.name}`}
              width={160}
              height={48}
              className="h-9 sm:h-10 lg:h-12 w-auto max-w-[120px] sm:max-w-[150px] lg:max-w-[170px] object-contain opacity-80 filter grayscale-[15%] transition-opacity duration-300 pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
