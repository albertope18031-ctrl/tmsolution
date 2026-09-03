import React from "react";

export const TrustCard: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-[0_16px_36px_rgba(15,45,89,0.18)] flex items-center gap-3 sm:gap-4 max-w-[calc(100%-1rem)] sm:max-w-sm transition-transform duration-300 hover:scale-[1.02]">
      {/* Icono de Verificación e Historial */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] rounded-xl bg-[#0F2D59]/10 text-[#0F2D59] flex items-center justify-center font-bold flex-shrink-0">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F2D59]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>

      {/* Contenido Textual de la Tarjeta */}
      <div className="flex flex-col text-left">
        <span className="text-[13px] sm:text-[14px] font-bold text-[#0F2D59] leading-snug font-montserrat">
          Más de 9 años de experiencia
        </span>
        <span className="text-[11px] sm:text-[12px] font-medium text-[#5A6578] leading-tight mt-0.5">
          Suministros y entregas a todo México
        </span>
      </div>
    </div>
  );
};
