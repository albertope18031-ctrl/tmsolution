import React from "react";

export const MissionVisionCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      {/* Tarjeta 1: Nuestra Misión */}
      <div className="bg-[#F4F6F9] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-start transition-all duration-300 hover:border-[#0F2D59]/30 hover:shadow-[0_12px_24px_rgba(15,45,89,0.06)]">
        {/* Cabecera de Tarjeta con Icono 48x48px */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F2D59] shadow-sm">
            {/* Icono de Diana / Objetivo / Propósito */}
            <svg
              className="w-6 h-6 text-[#0F2D59]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>

          <h3 className="text-[20px] font-bold text-[#0F2D59] font-montserrat leading-tight">
            Nuestra Misión
          </h3>
        </div>

        {/* Texto Íntegro de la Misión */}
        <p className="text-[15px] text-[#1F242E] leading-[1.65] font-normal">
          Somos una empresa cuyo principal objetivo es servir a nuestros clientes, brindándoles soluciones y distribuyéndoles los mejores productos a precios justos, comprometidos con la calidad, eficiencia y la mejora continua para lograr la satisfacción de nuestros clientes, empleados y proveedores.
        </p>
      </div>

      {/* Tarjeta 2: Nuestra Visión */}
      <div className="bg-[#F4F6F9] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-start transition-all duration-300 hover:border-[#0F2D59]/30 hover:shadow-[0_12px_24px_rgba(15,45,89,0.06)]">
        {/* Cabecera de Tarjeta con Icono 48x48px */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F2D59] shadow-sm">
            {/* Icono de Brújula / Expansión y Futuro */}
            <svg
              className="w-6 h-6 text-[#0F2D59]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          </div>

          <h3 className="text-[20px] font-bold text-[#0F2D59] font-montserrat leading-tight">
            Nuestra Visión
          </h3>
        </div>

        {/* Texto Íntegro de la Visión */}
        <p className="text-[15px] text-[#1F242E] leading-[1.65] font-normal">
          Ser una empresa reconocida y distinguida por la calidad de sus productos, la pronta respuesta y el nivel óptimo de solución a las necesidades de nuestros clientes.
        </p>
      </div>
    </div>
  );
};
