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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* En Móvil: Formulario arriba / En Desktop: Columna Derecha (60% aprox. - col-span-7) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <QuoteForm />
          </div>

          {/* En Móvil: Contacto abajo / En Desktop: Columna Izquierda (40% aprox. - col-span-5) */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <QuoteTrustBlock />
          </div>
        </div>
      </div>
    </section>
  );
};
