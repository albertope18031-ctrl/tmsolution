import React from "react";

export type SupplyCategorySlug = "herramientas" | "epp" | "operativo" | "especial";

export interface SupplyCategory {
  id: string;
  slug: SupplyCategorySlug;
  title: string;
  description: string;
  bulletPoints: string[];
  actionLabel: string;
  actionHref: string;
  isActive: boolean;
  icon: (props: { className?: string }) => React.JSX.Element;
}
