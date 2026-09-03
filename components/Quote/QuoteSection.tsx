import React from "react";
import { QuoteTrustBlock } from "./QuoteTrustBlock";

export const QuoteSection: React.FC = () => {
  return (
    <section
      id="por-que-tm"
      className="relative w-full bg-[#F4F6F9] py-14 sm:py-18 lg:py-24 scroll-mt-[90px] border-b border-[#E2E8F0] transition-colors"
    >
      <span id="cotizar" className="absolute -top-[90px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteTrustBlock />
      </div>
    </section>
  );
};
