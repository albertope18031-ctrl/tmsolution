import React from "react";
import { QuoteTrustBlock } from "./QuoteTrustBlock";
import { QuoteForm } from "./QuoteForm";

export const QuoteSection: React.FC = () => {
  return (
    <section
      id="cotizar"
      className="relative w-full bg-[#F4F6F9] py-12 sm:py-16 lg:py-24 scroll-mt-[90px] border-b border-[#E2E8F0] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* En Móvil: Bloque Informativo arriba (order-1) / En Desktop: Columna Izquierda (order-1 lg:col-span-5) */}
          <div className="order-1 lg:order-1 lg:col-span-5 w-full">
            <QuoteTrustBlock />
          </div>

          {/* En Móvil: Formulario abajo (order-2) / En Desktop: Columna Derecha (order-2 lg:col-span-7) */}
          <div className="order-2 lg:order-2 lg:col-span-7 w-full">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};
