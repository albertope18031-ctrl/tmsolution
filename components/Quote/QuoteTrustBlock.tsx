import React from "react";

export const QuoteTrustBlock: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full space-y-8 text-left">
      <div>
        {/* Kicker Superior */}
        <span className="inline-block text-[12px] sm:text-[13px] font-bold text-[#0F2D59] uppercase tracking-wider mb-2 select-none">
          ATENCIÓN Y ASESORÍA TÉCNICA
        </span>

        {/* Titular H3 */}
        <h3 className="text-2xl sm:text-3xl font-bold text-[#1F242E] font-montserrat leading-tight tracking-tight mb-4">
          Cotizaciones Claras y Entregas Puntuales
        </h3>

        <p className="text-[14px] sm:text-[15px] text-[#5A6578] leading-relaxed mb-6">
          Completa el formulario y nuestro departamento de compras y ventas técnicas analizará tus requerimientos de refacciones, equipos o consumibles para entregarte una propuesta a la medida en tiempo récord.
        </p>

        {/* Datos Directos de Contacto en Hermosillo */}
        <div className="space-y-4 pt-2">
          {/* Teléfono Directo */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#0F2D59]/10 text-[#0F2D59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#5A6578] uppercase tracking-wider block">Línea Telefónica Directa</span>
              <a href="tel:6621059595" className="text-[16px] font-bold text-[#0F2D59] hover:underline font-montserrat">
                6621-05-95-95
              </a>
            </div>
          </div>

          {/* Correo Electrónico */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#0F2D59]/10 text-[#0F2D59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#5A6578] uppercase tracking-wider block">Correo de Cotizaciones</span>
              <a href="mailto:ventas@tmsolution.com.mx" className="text-[15px] font-bold text-[#0F2D59] hover:underline break-all font-sans">
                ventas@tmsolution.com.mx
              </a>
            </div>
          </div>

          {/* Ubicación Física */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#0F2D59]/10 text-[#0F2D59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#5A6578] uppercase tracking-wider block">Oficinas y Almacén</span>
              <p className="text-[13px] text-[#1F242E] leading-snug">
                Calle Trenel #4, Col. Campo Grande, C.P. 83224, Hermosillo, Sonora, México.
              </p>
            </div>
          </div>

          {/* Horario de Operación */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#0F2D59]/10 text-[#0F2D59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-[#5A6578] uppercase tracking-wider block">Horario de Atención</span>
              <p className="text-[13px] text-[#1F242E] leading-snug">
                Lunes a Viernes: 8:00 AM – 6:00 PM <br />
                Sábados: 9:00 AM – 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lema Corporativo Encapsulado */}
      <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
        <p className="text-[13px] font-bold text-[#0F2D59] italic text-center">
          «¿Lo quieres o lo necesitas? Nosotros te lo conseguimos.»
        </p>
      </div>
    </div>
  );
};
