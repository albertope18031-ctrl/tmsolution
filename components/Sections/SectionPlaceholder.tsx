import React from "react";

interface SectionProps {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  bgColor?: "light" | "white";
  children?: React.ReactNode;
}

export const SectionPlaceholder: React.FC<SectionProps> = ({
  id,
  badge,
  title,
  subtitle,
  bgColor = "white",
  children,
}) => {
  return (
    <section
      id={id}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 scroll-mt-[90px] transition-colors ${
        bgColor === "light" ? "bg-[#F4F6F9]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="inline-block px-3 py-1 bg-[#0F2D59]/10 text-[#0F2D59] rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
          {badge}
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D59] font-montserrat tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-[#5A6578] text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};
