import React from "react";
import Image from "next/image";
import { HeroBadge } from "./HeroBadge";
import { HeroCTA } from "./HeroCTA";
import { TrustCard } from "./TrustCard";

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative w-full bg-gradient-to-b from-white via-[#F4F6F9]/60 to-[#F4F6F9] pt-20 lg:pt-24 pb-5 sm:pb-6 lg:pb-10 flex items-center min-h-auto overflow-hidden border-b border-[#E5E7EB]"
    >
      {/* Elementos Gráficos de Fondo Sutiles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F2D59]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#25D366]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Retícula Asimétrica 60% / 40% en Desktop y Apilada en Móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda (60% aprox. - lg:col-span-7): Contenido, Jerarquía y CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Nivel 1: Badge de Confianza */}
            <HeroBadge />

            {/* Contenedor Unificado de Textos con Animación Fade In Down Lenta y Pausada (2s) */}
            <div className="w-full animate-fade-in-down-slow">
              {/* Nivel 2: Titular Principal H1 Semántico */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold font-montserrat text-[#0F2D59] leading-[1.16] tracking-tight mb-4">
                SUMINISTROS Y SOLUCIONES DE CALIDAD PARA TU EMPRESA
              </h1>

              {/* Nivel 3: Lema Comercial de Impacto (H2) */}
              <h2 className="text-lg sm:text-xl font-bold text-[#1F242E] leading-snug mb-3">
                ¿Lo quieres o lo necesitas? Nosotros te lo conseguimos.
              </h2>

              {/* Bajada Descriptiva / Copywriting Técnico */}
              <p className="text-[15px] sm:text-base text-[#5A6578] font-normal leading-relaxed mb-8 max-w-2xl">
                Suministro ágil y confiable de componentes de automatización, control, potencia y rodamientos, complementado con seguridad industrial certificada (EPP), insumos operativos y adquisiciones a la medida para piezas críticas o difíciles de conseguir.
              </p>
            </div>

            {/* Nivel 4: Botones de Acción (CTAs) */}
            <HeroCTA />

            {/* Micro-garantías de Servicio */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5A6578]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cotizaciones rápidas sin compromiso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Marcas originales y certificadas</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha (40% aprox. - lg:col-span-5): Soporte Visual de Confianza */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Contenedor con Aspect Ratio fijo (16/10 o 4/3) para CLS = 0 */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(15,45,89,0.12)] border border-[#E2E8F0] bg-[#0A1F3D]">
              <Image
                src="/hero.png"
                alt="Suministros Industriales y Soluciones Empresariales - TM SOLUTION"
                fill
                priority={true}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Degradado Sutil de Contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Tarjeta Flotante de Confianza (+9 años de experiencia) */}
            <div className="absolute -bottom-5 sm:-bottom-6 -left-2 sm:-left-6 z-20">
              <TrustCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
