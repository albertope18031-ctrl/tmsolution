import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="w-full bg-[#1F242E] text-white border-t-[3px] border-[#0F2D59] pt-12 sm:pt-16 pb-8 scroll-mt-[90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Retícula de 3 Columnas en Desktop y 1 Columna en Móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 text-left">
          
          {/* Columna 1: Identidad Corporativa y Alcance */}
          <div className="space-y-4">
            {/* Logotipo Oficial en Negativo */}
            <div className="pb-1">
              <Image
                src="/logo-tm.png"
                alt="TM SOLUTION - Suministros Industriales"
                width={200}
                height={52}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Extracto de Alcance */}
            <p className="text-[14px] text-[#94A3B8] leading-relaxed pt-1">
              Especialistas en suministro integral para la industria, minería y construcción. Más de 9 años abasteciendo a empresas en México con calidad, prontitud y precios justos.
            </p>

            {/* Lema de Marca */}
            <p className="text-[12.5px] italic text-[#E2E8F0] pt-1">
              «¿Lo quieres o lo necesitas? Nosotros te lo conseguimos.»
            </p>
          </div>

          {/* Columna 2: Mapa de Sitio y Categorías Clave */}
          <div className="space-y-4">
            <h4 className="text-[15px] font-semibold text-white uppercase tracking-wider font-montserrat border-b border-[#334155] pb-2">
              Mapa de Sitio
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#inicio" className="text-[#94A3B8] hover:text-white transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-[#94A3B8] hover:text-white transition-colors duration-200">
                  ¿Quiénes Somos?
                </a>
              </li>
              <li>
                <a href="#suministros" className="text-[#94A3B8] hover:text-white transition-colors duration-200">
                  Líneas de Suministro
                </a>
              </li>
              <li>
                <a href="#marcas" className="text-[#94A3B8] hover:text-white transition-colors duration-200">
                  Muro de Marcas Distribuidas
                </a>
              </li>
              <li>
                <a href="#mision-vision" className="text-[#94A3B8] hover:text-white transition-colors duration-200">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a href="#cotizar" className="text-[#94A3B8] hover:text-white transition-colors duration-200 font-semibold text-[#38BDF8]">
                  Solicitar Cotización →
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Oficial Corporativo */}
          <div className="space-y-4">
            <h4 className="text-[15px] font-semibold text-white uppercase tracking-wider font-montserrat border-b border-[#334155] pb-2">
              Contacto Oficial Corporativo
            </h4>
            <div className="space-y-3 text-[13.5px] text-[#94A3B8]">
              {/* Ubicación */}
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Calle Trenel #4, Col. Campo Grande, C.P. 83224, Hermosillo, Sonora, México.</span>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:6621124124" className="text-[#E2E8F0] hover:text-white font-semibold hover:underline">
                  6621-12-41-24
                </a>
              </div>

              {/* Correo */}
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#38BDF8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:cmendoza@tmsolution.com.mx" className="text-[#E2E8F0] hover:text-white font-medium hover:underline break-all">
                  cmendoza@tmsolution.com.mx
                </a>
              </div>

              {/* Horario de Atención */}
              <div className="flex items-start gap-2.5 pt-1">
                <svg className="w-5 h-5 text-[#94A3B8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[13px] leading-relaxed text-[#CBD5E1]">
                  Lunes a Viernes: 8:00 AM – 6:00 PM <br />
                  Sábados: 8:00 AM – 1:00 PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra Inferior de Derechos Reservados */}
        <div className="border-t border-[#334155] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <p>© 2026 TM SOLUTION. Todos los derechos reservados.</p>
          <p>Suministros Industriales y Corporativos · Hermosillo, Sonora, México.</p>
        </div>

      </div>
    </footer>
  );
};
