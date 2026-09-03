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

        {/* Lista de 3 Garantías de Servicio Compactas */}
        <div className="space-y-3.5 pt-1">
          {/* Garantía 1: Respuesta Técnica en Tiempo Récord */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm transition-all duration-200 hover:border-[#0F2D59]/30">
            <div className="w-10 h-10 rounded-lg bg-[#EBF1F8] text-[#0F2D59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#0F2D59]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[14.5px] font-bold text-[#0F2D59] font-montserrat leading-snug">
                Respuesta Técnica en Tiempo Récord
              </h4>
              <p className="text-[13px] text-[#5A6578] leading-relaxed mt-0.5">
                Cotizaciones ágiles con precios competitivos y fichas técnicas validadas.
              </p>
            </div>
          </div>

          {/* Garantía 2: Envíos Locales y Nacionales */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm transition-all duration-200 hover:border-[#0F2D59]/30">
            <div className="w-10 h-10 rounded-lg bg-[#EBF1F8] text-[#0F2D59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#0F2D59]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div>
              <h4 className="text-[14.5px] font-bold text-[#0F2D59] font-montserrat leading-snug">
                Envíos Locales y Nacionales
              </h4>
              <p className="text-[13px] text-[#5A6578] leading-relaxed mt-0.5">
                Entregas directas en planta en Hermosillo y logística consolidada a cualquier parte de México.
              </p>
            </div>
          </div>

          {/* Garantía 3: Garantía y Marcas Originales */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm transition-all duration-200 hover:border-[#0F2D59]/30">
            <div className="w-10 h-10 rounded-lg bg-[#EBF1F8] text-[#0F2D59] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#0F2D59]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[14.5px] font-bold text-[#0F2D59] font-montserrat leading-snug">
                Garantía y Marcas Originales
              </h4>
              <p className="text-[13px] text-[#5A6578] leading-relaxed mt-0.5">
                Suministros 100% nuevos y certificados, con respaldo y garantía directa de los fabricantes más reconocidos.
              </p>
            </div>
          </div>
        </div>

        {/* Acceso de Canal Directo Inmediato */}
        <div className="mt-5 p-4 rounded-xl bg-[#EBF1F8] border border-[#CBD5E1] flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
          <p className="text-[13.5px] text-[#1F242E] leading-snug">
            ¿Requieres asistencia inmediata?{" "}
            <a href="tel:6621124124" className="font-bold text-[#0F2D59] hover:underline whitespace-nowrap">
              Llámanos al 6621-12-41-24
            </a>{" "}
            o{" "}
            <a
              href="https://wa.me/526621124124?text=Hola%20TM%20SOLUTION,%20requiero%20una%20cotizaci%C3%B3n%20para%20mi%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#16A34A] hover:underline whitespace-nowrap"
            >
              escríbenos por WhatsApp
            </a>
            .
          </p>
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
